import { FiltersStateType } from '../../store/slices/filters.slice';
import { useSelector } from 'react-redux';
import { useGetAllSubjectsQuery } from '../../store/crud.api';
import VerticalBarChart from './VerticlalBarDiagram';

const VerticlalBarDiagramPage = () => {
	type RootState = {
		filters: FiltersStateType;
	};

	const { search, orderBy } = useSelector((state: RootState) => state.filters);
	const body = {
		search: search ?? '',
		orderBy: orderBy,
	};
	const { data = [] } = useGetAllSubjectsQuery(body);
	return (
		<>
			<div className='flex items-center justify-center h-screen'>
				<VerticalBarChart data={data} />
			</div>
		</>
	);
};

export default VerticlalBarDiagramPage;
