import { Select, Option } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { FiltersStateType, setOrderBy } from '../../store/slices/filters.slice'
import { useNavigate } from 'react-router-dom'

type RootState = {
	filters: FiltersStateType
}

export function CustomSelect() {
	const dispatch = useDispatch()
	const orderBy = useSelector((state: RootState) => state.filters.orderBy)
	const navigate = useNavigate()
	const handleChange = (value: string | undefined) => {
		if (value) {
			dispatch(setOrderBy(value))
			navigate(`?orderBy=${value}`)
		}
	}

	return (
		<div className='w-52'>
			<Select label='Сортировка' value={orderBy} onChange={handleChange}>
				<Option value='desc'>По убыванию</Option>
				<Option value='asc'>По Возрастанию</Option>
			</Select>
		</div>
	)
}
