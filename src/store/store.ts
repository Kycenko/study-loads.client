import { configureStore } from '@reduxjs/toolkit'
import { CRUDApi } from './crud.api'
import filtersReducer from './slices/filters.slice'

export const store = configureStore({
	reducer: {
		filters: filtersReducer,
		[CRUDApi.reducerPath]: CRUDApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(CRUDApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
