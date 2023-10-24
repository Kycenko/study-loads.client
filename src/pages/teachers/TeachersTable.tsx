import { useGetAllTeachersQuery } from '../../store/crud.api';
import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = [
	'Id',
	'Id ученой степени',
	'ФИО',
	'Должность',
	'Стаж',
	'Действия',
];

const TeachersTable = () => {
	const { data = [], error, isLoading } = useGetAllTeachersQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}

	return (
		<Card className='w-full'>
			<table className='w-full min-w-max table-auto text-center'>
				<thead>
					<tr>
						{TABLE_HEAD.map(head => (
							<th key={head} className='border-b  bg-gray-100 p-4'>
								<Typography
									variant='small'
									color='blue-gray'
									className=' leading-none font-medium '
								>
									{head}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data?.map(data => (
						<tr key={data.id}>
							<td className='p-4 border-b border-blue-gray-50'>
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal'
								>
									{data.id}
								</Typography>
							</td>
							<td className='p-4 border-b border-blue-gray-50'>
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal'
								>
									{data.academicDegreeId}
								</Typography>
							</td>

							<td className='p-4 border-b border-blue-gray-50'>
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal'
								>
									{data.fullName}
								</Typography>
							</td>
							<td className='p-4 border-b border-blue-gray-50'>
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal'
								>
									{data.jobTitle}
								</Typography>
							</td>
							<td className='p-4 border-b border-blue-gray-50'>
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal'
								>
									{data.workExperience}
								</Typography>
							</td>
							<td className='p-4 border-b border-blue-gray-50'>
								<Typography
									as='a'
									href='#'
									variant='small'
									color='blue-gray'
									className=''
								>
									Edit
								</Typography>
								<Typography
									as='a'
									href='#'
									variant='small'
									color='blue-gray'
									className=''
								>
									Delete
								</Typography>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Card>
	);
};

export default TeachersTable;
