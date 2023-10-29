import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { CustomSearch } from '../../components/UI/CustomSearch'
import { CustomSelect } from '../../components/UI/CustomSelect'
import SubjectsTable from './SubjectsTable'
import CreateSubjectsModal from './CreateSubjectsModal'

const SubjectsPage = () => {
	const [isCreateModalOpen, setCreateModalOpen] = useState(false)

	const handleCreateStudyLoad = () => {
		setCreateModalOpen(false)
	}
	return (
		<>
			<Layout>
				<div className='flex p-5 justify-between'>
					<CustomSearch />
					<button
						className='border p-2 bg-black text-white rounded-md'
						onClick={() => setCreateModalOpen(true)}
					>
						Создать запись
					</button>
					<CustomSelect />
				</div>
				<SubjectsTable />
			</Layout>
			<CreateSubjectsModal
				isOpen={isCreateModalOpen}
				onClose={() => setCreateModalOpen(false)}
				onCreate={handleCreateStudyLoad}
			/>
		</>
	)
}

export default SubjectsPage
