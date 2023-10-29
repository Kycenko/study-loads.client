import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FiltersStateType = {
	orderBy?: string
	search?: string
}

const initialState: FiltersStateType = {
	orderBy: '',
	search: '',
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setOrderBy: (state, action: PayloadAction<string>) => {
			state.orderBy = action.payload
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
	},
})

export const { setOrderBy, setSearch } = filtersSlice.actions
export default filtersSlice.reducer
