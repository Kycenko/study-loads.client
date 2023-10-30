import { ChangeEvent, useState } from 'react';
import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
	Typography,
} from '@material-tailwind/react';
import { useAddSubjectMutation } from '../../store/crud.api';

type SubjectData = {
	name: string;
	hours: number;
};

type CreateSubjectsModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onCreate: (newSubject: SubjectData) => void;
};

const CreateSubjectsModal = ({
	isOpen,
	onClose,
	onCreate,
}: CreateSubjectsModalProps) => {
	const [name, setName] = useState<string>('');
	const [hours, setHours] = useState<number | string>('');
	const [addSubject] = useAddSubjectMutation();

	const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		await addSubject({
			name,
			hours: Number(hours),
		});

		onCreate({
			name,
			hours: Number(hours),
		});

		onClose();

		setName('');
		setHours('');
	};

	return (
		<Dialog size='xs' open={isOpen} handler={onClose} className='shadow-none'>
			<Card className='mx-auto w-full max-w-[20rem]'>
				<CardBody className='flex flex-col gap-4'>
					<Typography
						variant='h4'
						className='text-center text-lg'
						color='blue-gray'
					>
						Создание записи в таблице Предметы
					</Typography>
					<form className='flex flex-col items-center	' onSubmit={handleSubmit}>
						<div>
							<input
								className='p-2 mb-2 w-50 border border-gray-500 rounded-md'
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
								Создать
							</Button>
						</CardFooter>
					</form>
				</CardBody>
			</Card>
		</Dialog>
	);
};

export default CreateSubjectsModal;
