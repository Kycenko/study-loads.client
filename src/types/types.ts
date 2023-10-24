export type AcademicDegree = {
	id: number;
	name: string;
	year: number;
	educationalInstitution: string;
};

export type Group = {
	id: number;
	specialityId: number;
	name: string;
	course: number;
};

export type StudyLoad = {
	id: number;
	groupId: number;
	subjectId: number;
	teacherId: number;
	year: number;
	numberOfHours: number;
	numberOfLectures: number;
	numberOfLaboratoryWorks: number;
};

export type Teacher = {
	id: number;
	academicDegreeId: number;
	workExperience: number;
	jobTitle: string;
	fullName: string;
};

export type Speciality = {
	id: number;
	name: string;
	faculty: string;
	code: number;
};

export type Subject = {
	id: number;
	name: string;
	hours: number;
};
