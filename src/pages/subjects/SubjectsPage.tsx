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

import ExcelJS, { Workbook } from 'exceljs';

const SubjectsPage = () => {
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);

	const handleCreateStudyLoad = () => {
		setCreateModalOpen(false);
	};
	interface SubjectData {
		id: number;
		name: string;
		hours: number;
	}

	const { search, orderBy } = useSelector((state: RootState) => state.filters);
	const body = {
		search: search ?? '',
		orderBy: orderBy,
	};
	const { data = [] } = useGetAllSubjectsQuery(body);

	const exportToExcel = async (data: SubjectData[]) => {
		// Создайте новую книгу Excel
		const workbook: Workbook = new ExcelJS.Workbook();

		// Добавьте новый лист книги
		const worksheet = workbook.addWorksheet('Subjects Data');

		// Определите заголовки столбцов
		const columns = [
			{ header: 'ID', key: 'id', width: 10 },
			{ header: 'Name', key: 'name', width: 20 },
			{ header: 'Hours', key: 'hours', width: 10 },
		];

		// Установите заголовки столбцов
		worksheet.columns = columns;

		// Добавьте данные в лист
		data.forEach(item => {
			worksheet.addRow({
				id: item.id,
				name: item.name,
				hours: item.hours,
			});
		});

		// Создайте Blob для скачивания
		const buffer = await workbook.xlsx.writeBuffer();

		// Создайте Blob для скачивания
		const blob = new Blob([buffer], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});

		// Создайте URL для Blob
		const url = window.URL.createObjectURL(blob);

		// Создайте ссылку для скачивания
		const a = document.createElement('a');
		a.href = url;
		a.download = 'subjects_data.xlsx';
		a.click();

		// Очистите URL
		window.URL.revokeObjectURL(url);
	};

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
					<button
						className='border p-2 bg-black text-white rounded-md'
						onClick={() => exportToExcel(data)}
					>
						Экспорт в Excel
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
