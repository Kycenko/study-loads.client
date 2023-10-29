import { ChangeEvent, useState, useEffect } from 'react'
import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
	Typography,
} from '@material-tailwind/react'
import {
	useGetSubjectByIdQuery,
	useUpdateSubjectMutation,
} from '../../store/crud.api'

type EditSubjectModalProps = {
	isOpen: boolean
	onClose: () => void
	onUpdate: () => void
	subjectId: number | null
}

const EditSubjectsModal = ({
	isOpen,
	onClose,
	onUpdate,
	subjectId,
}: EditSubjectModalProps) => {
	const [name, setName] = useState('')
	const [hours, setHours] = useState<number | string>('')
	const { data: subjectData } = useGetSubjectByIdQuery(subjectId || 0)
	const [updateSubject] = useUpdateSubjectMutation()

	useEffect(() => {
		if (subjectData) {
			setName(subjectData.name)
			setHours(subjectData.hours)
		}
	}, [subjectData])

	const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		await updateSubject({ id: subjectId, name, hours: Number(hours) })
		onUpdate()
		onClose()
	}

	return (
		<Dialog size='xs' open={isOpen} handler={onClose} className='shadow-none'>
			<Card className='mx-auto w-full max-w-[20rem]'>
				<CardBody className='flex flex-col gap-4'>
					<Typography
						variant='h4'
						className='text-center text-lg'
						color='blue-gray'
					>
						Редактирование предмета
					</Typography>
					<form
						className='flex flex-col items-center	 justify-center'
						onSubmit={handleSubmit}
					>
						<div>
							<input
								className='p-2 mb-2 w-50 border border-gray-500  rounded-md'
								placeholder='Название предмета'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div>
							<input
								className='p-2 mb-2 w-50 border border-gray-500 rounded-md'
								placeholder='Количество часов'
								value={hours}
								onChange={e => setHours(e.target.value)}
							/>
						</div>
						<CardFooter className='pt-3'>
							<Button type='submit' variant='gradient' fullWidth>
								Сохранить
							</Button>
						</CardFooter>
					</form>
				</CardBody>
			</Card>
		</Dialog>
	)
}

export default EditSubjectsModal
