import { useSelector } from 'react-redux';
import {
	useDeleteStudyLoadsMutation,
	useGetAllStudyLoadsQuery,
} from '../../store/crud.api';
import { Card, Typography } from '@material-tailwind/react';
import { FiltersStateType } from '../../store/slices/filters.slice';
import { studyLoadHeads } from '../../components/utils/table.heads';

type RootState = {
	filters: FiltersStateType;
};

const StudyLoadsTable = () => {
	const { search, orderBy } = useSelector((state: RootState) => state.filters);
	const body = {
		search: search,
		orderBy: orderBy,
	};
	const { data = [] } = useGetAllStudyLoadsQuery(body);
	const [deleteStudyLoad] = useDeleteStudyLoadsMutation();

	return (
		<Card className='w-full'>
			<div className='max-h-[840px] overflow-y-scroll'>
				<table className='w-full min-w-max table-auto text-center'>
					<thead>
						<tr>
							{studyLoadHeads.map(head => (
								<th key={head} className='border-b bg-gray-100 p-4'>
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
										{data.groupId}
									</Typography>
								</td>

								<td className='p-4 border-b border-blue-gray-50'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal'
									>
										{data.subjectId}
									</Typography>
								</td>
								<td className='p-4 border-b border-blue-gray-50'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal'
									>
										{data.teacherId}
									</Typography>
								</td>
								<td className='p-4 border-b border-blue-gray-50'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal'
									>
										{data.year}
									</Typography>
								</td>
								<td className='p-4 border-b border-blue-gray-50'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal'
									>
										{data.numberOfHours}
									</Typography>
								</td>
								<td className='p-4 border-b border-blue-gray-50'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal'
									>
										{data.numberOfLectures}
									</Typography>
								</td>
								<td className='p-4 border-b border-blue-gray-50'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal'
									>
										{data.numberOfLaboratoryWorks}
									</Typography>
								</td>
								<td className='p-4  border-b border-blue-gray-50'>
									<Typography
										as='a'
										variant='small'
										color='blue-gray'
										className=' mb-2 border rounded-md cursor-pointer'
									>
										Изменить
									</Typography>
									<Typography
										as='a'
										variant='small'
										color='blue-gray'
										className=' border rounded-md cursor-pointer'
										onClick={() => deleteStudyLoad(data.id)}
									>
										Удалить
									</Typography>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Card>
	);
};

export default StudyLoadsTable;
