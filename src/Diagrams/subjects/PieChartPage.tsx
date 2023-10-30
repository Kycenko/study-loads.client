import { useSelector } from 'react-redux';
import { FiltersStateType } from '../../store/slices/filters.slice';
import PieChart from './PieChart';
import { useGetAllSubjectsQuery } from '../../store/crud.api';

const PieChartPage = () => {
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
			<div className='flex items-center justify-center w-screen max-h-screen'>
				<PieChart data={data} />
			</div>
		</>
	);
};

export default PieChartPage;
