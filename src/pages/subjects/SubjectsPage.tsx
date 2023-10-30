import Layout from '../../components/Layout/Layout';
import { CustomSearch } from '../../components/UI/CustomSearch';

import SubjectsTable from './SubjectsTable';
import CreateSubjectsModal from './CreateSubjectsModal';
import SubjectDiagramSelect from '../../components/UI/DiagramSelect';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetAllSubjectsQuery } from '../../store/crud.api';

import { CustomSelect } from '../../components/UI/CustomSelect';
import { useState } from 'react';

const SubjectsPage = () => {
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);

	const handleCreateStudyLoad = () => {
		setCreateModalOpen(false);
	};

	const { search, orderBy } = useSelector((state: RootState) => state.filters);
	const body = {
		search: search ?? '',
		orderBy: orderBy,
	};
	const { data = [] } = useGetAllSubjectsQuery(body);

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

					<SubjectDiagramSelect />
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
	);
};

export default SubjectsPage;
