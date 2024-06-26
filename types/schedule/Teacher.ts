import type { Subject } from "~/types/schedule/Subject";
import type { Grade } from "~/types/schedule/Grade";

export type Teacher = {
	id: number;

	firstName: string;
	middleName: string;
	lastName: string;

	phoneNumber?: string;
	email?: string;
	grade: Grade;

	image?: string;
	subjects: Subject[];
};

export const getFullName = (teacher: Teacher) => {
	return `${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`;
};

export const getShortName = (teacher: Teacher) => {
	return `${teacher.lastName} ${teacher.firstName[0]}. ${teacher.middleName[0]}.`;
};
