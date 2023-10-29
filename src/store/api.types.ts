export type CreateStudyLoadRequest = {
	groupId: number
	subjectId: number
	teacherId: number
	year: number
	numberOfHours: number
	numberOfLectures: number
	numberOfLaboratoryWorks: number
}
export type CreateStudyLoadResponse = {
	groupId: number
	subjectId: number
	teacherId: number
	year: number
	numberOfHours: number
	numberOfLectures: number
	numberOfLaboratoryWorks: number
}

export type CreatesSubjectRequest = {
	name: string
	hours: number
}
export type CreateSubjectResponse = {
	name: string
	hours: number
}

export type UpdateSubjectRequest = {
	name: string
	hours: number
}
export type UpdateSubjectResponse = {
	id: number | null
	name: string
	hours: number
}
