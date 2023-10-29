import { useSelector } from 'react-redux'
import {
	useDeleteSubjectMutation,
	useGetAllSubjectsQuery,
} from '../../store/crud.api'
import { Card, Typography } from '@material-tailwind/react'
import { FiltersStateType } from '../../store/slices/filters.slice'
import { subjectHead } from '../../components/utils/table.heads'
import { useState } from 'react'
import EditSubjectsModal from './EditSubjectsModal'

type RootState = {
	filters: FiltersStateType
}

const SubjectsTable = () => {
	const { search, orderBy } = useSelector((state: RootState) => state.filters)
	const body = {
		search: search ?? '',
		orderBy: orderBy,
	}
	const { data = [] } = useGetAllSubjectsQuery(body)
	const [deleteSubject] = useDeleteSubjectMutation()

	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	const handleEditModal = () => {
		setIsEditModalOpen(false)
	}
	const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(
		null
	)

	const handleEditClick = (subjectId: number) => {
		setSelectedSubjectId(subjectId)
		setIsEditModalOpen(true)
	}

	return (
		<>
			<Card className='w-full'>
				<div className='max-h-[840px] overflow-y-scroll'>
					<table className='w-full min-w-max table-auto text-center'>
						<thead>
							<tr>
								{subjectHead.map(head => (
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
							{data
								?.filter(item =>
									item.name.toLowerCase().includes(search?.toLowerCase() ?? '')
								)
								?.map(data => (
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
												{data.name}
											</Typography>
										</td>

										<td className='p-4 border-b border-blue-gray-50'>
											<Typography
												variant='small'
												color='blue-gray'
												className='font-normal'
											>
												{data.hours}
											</Typography>
										</td>
										<td className='p-4  border-b border-blue-gray-50'>
											<Typography
												as='a'
												variant='small'
												color='blue-gray'
												className=' mb-2 border rounded-md  cursor-pointer'
												onClick={() => handleEditClick(data.id)}
											>
												Изменить
											</Typography>
											<Typography
												as='a'
												variant='small'
												color='blue-gray'
												className=' border rounded-md cursor-pointer'
												onClick={() => deleteSubject(data.id)}
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

			<EditSubjectsModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				onUpdate={handleEditModal}
				subjectId={selectedSubjectId}
			/>
		</>
	)
}

export default SubjectsTable
