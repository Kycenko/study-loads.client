import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	AcademicDegree,
	Group,
	Speciality,
	StudyLoad,
	Subject,
	Teacher,
} from '../types/types'
import { FiltersStateType } from './slices/filters.slice'

export const CRUDApi = createApi({
	reducerPath: 'CRUDApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/' }),
	tagTypes: [
		'AcademicDegree',
		'Group',
		'Speciality',
		'StudyLoad',
		'Subject',
		'Teacher',
	],
	endpoints: builder => ({
		//Academic Degrees
		getAllAcademicDegrees: builder.query<AcademicDegree[], void>({
			query: () => `academic-degrees`,
			providesTags: ['AcademicDegree'],
		}),

		//Subjects
		getAllSubjects: builder.query<Subject[], void>({
			query: () => 'subjects',
			providesTags: ['Subject'],
		}),
		deleteSubject: builder.mutation<number, number>({
			query: id => ({
				url: `subjects/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Subject'],
		}),

		//Specialities
		getAllSpecialities: builder.query<Speciality[], void>({
			query: () => 'specialities',
			providesTags: ['Speciality'],
		}),
		//Teachers
		getAllTeachers: builder.query<Teacher[], void>({
			query: () => 'teachers',
			providesTags: ['Teacher'],
		}),

		//Groups
		getAllGroups: builder.query<Group[], void>({
			query: () => 'groups',
			providesTags: ['Group'],
		}),
		//Study Loads
		getAllStudyLoads: builder.query<StudyLoad[], FiltersStateType>({
			query: body => {
				let url = 'study-loads'
				let params = new URLSearchParams()
				if (body.search) {
					params.append('name', body.search)
				}
				if (body.orderBy) {
					params.append('orderBy', body.orderBy)
				}
				return `${url}?${params.toString()}`
			},
			providesTags: ['StudyLoad'],
		}),
	}),
})

export const {
	useGetAllAcademicDegreesQuery,
	useGetAllSubjectsQuery,
	useDeleteSubjectMutation,
	useGetAllSpecialitiesQuery,
	useGetAllTeachersQuery,
	useGetAllGroupsQuery,
	useGetAllStudyLoadsQuery,
} = CRUDApi
