import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Input } from '@material-tailwind/react'
import { SetStateAction, useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/store.hooks'
import { setSearch } from '../../store/slices/filters.slice'

export function CustomSearch() {
	const dispatch = useAppDispatch()
	const [searchValue, setSearchValue] = useState('')
	const handleSearch = () => {
		dispatch(setSearch(searchValue))
	}

	const handleKeyPress = (e: { key: string }) => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}
	useEffect(() => {
		if (searchValue.trim() === '') {
			dispatch(setSearch(''))
		}
	}, [searchValue, dispatch])

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setSearchValue(e.target.value)
	}

	return (
		<div className='w-full md:w-72'>
			<Input
				value={searchValue}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
				label='Поиск...'
				icon={<MagnifyingGlassIcon className='h-5 w-5' />}
				crossOrigin={undefined}
			/>
		</div>
	)
}
