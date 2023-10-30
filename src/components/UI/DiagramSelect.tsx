import { Select, Option } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SubjectDiagramSelect = () => {
	return (
		<div className='w-52'>
			<Select label='Диаграмма'>
				<Link to='/subjects-circle-diagram'>
					<Option>Круглая</Option>
				</Link>

				<Link to='/subjects-vertical-diagram'>
					<Option>Вертикальная</Option>
				</Link>
			</Select>
		</div>
	);
};

export default SubjectDiagramSelect;
