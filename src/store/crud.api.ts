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
import {
	CreateStudyLoadRequest,
	CreateStudyLoadResponse,
	CreateSubjectResponse,
	CreatesSubjectRequest,
	UpdateSubjectRequest,
	UpdateSubjectResponse,
} from './api.types'

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
		getAllSubjects: builder.query<Subject[], FiltersStateType>({
			query: body => {
				let url = 'subjects'
				let params = new URLSearchParams()
				if (body.search) {
					params.append('name', body.search)
				}
				if (body.orderBy) {
					params.append('orderBy', body.orderBy)
				}
				return `${url}?${params.toString()}`
			},
			providesTags: ['Subject'],
		}),
		getSubjectById: builder.query<Subject, number>({
			query: (id: number) => `subjects/${id}`,
			providesTags: ['Subject'],
		}),
		addSubject: builder.mutation<CreatesSubjectRequest, CreateSubjectResponse>({
			query: body => ({
				url: 'subjects',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Subject'],
		}),
		updateSubject: builder.mutation<
			UpdateSubjectRequest,
			UpdateSubjectResponse
		>({
			query: body => ({
				url: 'subjects',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Subject'],
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
		addStudyLoad: builder.mutation<
			CreateStudyLoadRequest,
			CreateStudyLoadResponse
		>({
			query: body => ({
				url: 'study-loads',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['StudyLoad'],
		}),
		deleteStudyLoads: builder.mutation<number, number>({
			query: id => ({
				url: `study-loads/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['StudyLoad'],
		}),
	}),
})

export const {
	useGetAllAcademicDegreesQuery,
	useGetAllSubjectsQuery,
	useGetSubjectByIdQuery,
	useAddSubjectMutation,
	useUpdateSubjectMutation,
	useDeleteSubjectMutation,
	useGetAllSpecialitiesQuery,
	useGetAllTeachersQuery,
	useGetAllGroupsQuery,
	useGetAllStudyLoadsQuery,
	useAddStudyLoadMutation,
	useDeleteStudyLoadsMutation,
} = CRUDApi
