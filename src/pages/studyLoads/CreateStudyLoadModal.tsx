import { ChangeEvent, useState } from 'react'
import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
	Typography,
	IconButton,
} from '@material-tailwind/react'
import { useAddStudyLoadMutation } from '../../store/crud.api'

type StudyLoadData = {
	groupId: number
	subjectId: number
	teacherId: number
	year: number
	numberOfHours: number
	numberOfLectures: number
	numberOfLaboratoryWorks: number
}

type CreateStudyLoadModalProps = {
	isOpen: boolean
	onClose: () => void
	onCreate: (newStudyLoad: StudyLoadData) => void
}

const CreateStudyLoadModal = ({
	isOpen,
	onClose,
	onCreate,
}: CreateStudyLoadModalProps) => {
	const [groupId, setGroupId] = useState<number | string>('')
	const [subjectId, setSubjectId] = useState<number | string>('')
	const [teacherId, setTeacherId] = useState<number | string>('')
	const [year, setYear] = useState<number | string>('')
	const [numberOfHours, setNumberOfHours] = useState<number | string>('')
	const [numberOfLectures, setNumberOfLectures] = useState<number | string>('')
	const [numberOfLaboratoryWorks, setNumberOfLaboratoryWorks] = useState<
		number | string
	>('')
	const [addStudyLoad] = useAddStudyLoadMutation()

	const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		await addStudyLoad({
			groupId: Number(groupId),
			subjectId: Number(subjectId),
			teacherId: Number(teacherId),
			year: Number(year),
			numberOfHours: Number(numberOfHours),
			numberOfLectures: Number(numberOfLectures),
			numberOfLaboratoryWorks: Number(numberOfLaboratoryWorks),
		})
		onCreate({
			groupId: Number(groupId),
			subjectId: Number(subjectId),
			teacherId: Number(teacherId),
			year: Number(year),
			numberOfHours: Number(numberOfHours),
			numberOfLectures: Number(numberOfLectures),
			numberOfLaboratoryWorks: Number(numberOfLaboratoryWorks),
		})
		onClose()
	}

	return (
		<Dialog size='xs' open={isOpen} handler={onClose} className='shadow-none '>
			<Card className='mx-auto w-full  max-w-[20rem]'>
				<CardBody className='flex flex-col gap-4	'>
					<Typography
						variant='h4'
						className='text-center text-lg'
						color='blue-gray'
					>
						Создание записи в таблице Нагрузка
					</Typography>
					<form
						className='flex flex-col justify-between'
						onSubmit={handleSubmit}
					>
						<div>
							<input
								className='p-2 mb-2 w-50 border border-gray-500 rounded-md '
								placeholder='Id группы'
								value={groupId}
								onChange={e => setGroupId(e.target.value)}
							/>
							<IconButton
								className='ml-5 rounded-md'
								size='sm'
								variant='gradient'
							>
								+
							</IconButton>
						</div>
						<div>
							<input
								className='p-2 mb-2 w-50 border border-gray-500 rounded-md '
								placeholder='Id предмета'
								value={subjectId}
								onChange={e => setSubjectId(e.target.value)}
							/>
							<IconButton
								className='ml-5 rounded-md'
								size='sm'
								variant='gradient'
							>
								+
							</IconButton>
						</div>
						<div>
							<input
								className='p-2 mb-2 w-50 border border-gray-500 rounded-md '
								placeholder='Id преподавателя'
								value={teacherId}
								onChange={e => setTeacherId(e.target.value)}
							/>
							<IconButton
								className='ml-5 rounded-md'
								size='sm'
								variant='gradient'
							>
								+
							</IconButton>
						</div>

						<input
							className='p-2 mb-2 w-full border border-gray-500 rounded-md '
							placeholder='Год'
							value={year}
							onChange={e => setYear(e.target.value)}
						/>

						<input
							className='p-2 mb-2 w-50 border border-gray-500 rounded-md '
							placeholder='Количество часов'
							value={numberOfHours}
							onChange={e => setNumberOfHours(e.target.value)}
						/>

						<input
							className='p-2 mb-2 w-50 border border-gray-500 rounded-md '
							placeholder='Количество лекций'
							value={numberOfLectures}
							onChange={e => setNumberOfLectures(e.target.value)}
						/>
						<input
							className='p-2 mb-2 w-50 border border-gray-500 rounded-md '
							placeholder='Количество лабораторных работ'
							value={numberOfLaboratoryWorks}
							onChange={e => setNumberOfLaboratoryWorks(e.target.value)}
						/>
						<CardFooter className='pt-3'>
							<Button type='submit' variant='gradient' fullWidth>
								Создать
							</Button>
						</CardFooter>
					</form>
				</CardBody>
			</Card>
		</Dialog>
	)
}

export default CreateStudyLoadModal
