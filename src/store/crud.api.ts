import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	AcademicDegree,
	Group,
	Speciality,
	StudyLoad,
	Subject,
	Teacher,
} from '../types/types';

export const CRUDApi = createApi({
	reducerPath: 'CRUDApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/' }),
	endpoints: builder => ({
		//Academic Degrees
		getAllAcademicDegrees: builder.query<AcademicDegree[], void>({
			query: () => `/academic-degrees`,
		}),

		//Subjects
		getAllSubjects: builder.query<Subject[], void>({
			query: () => 'subjects',
		}),
		//Specialities
		getAllSpecialities: builder.query<Speciality[], void>({
			query: () => 'specialities',
		}),
		//Teachers
		getAllTeachers: builder.query<Teacher[], void>({
			query: () => 'teachers',
		}),

		//Groups
		getAllGroups: builder.query<Group[], void>({
			query: () => 'groups',
		}),
		//Study Loads
		getAllStudyLoads: builder.query<StudyLoad[], void>({
			query: () => 'study-loads',
		}),
	}),
});

export const {
	useGetAllAcademicDegreesQuery,
	useGetAllSubjectsQuery,
	useGetAllSpecialitiesQuery,
	useGetAllTeachersQuery,
	useGetAllGroupsQuery,
	useGetAllStudyLoadsQuery,
} = CRUDApi;
