import type { Subject } from "~/types/Subject";
import type { Grade } from "~/types/Grade";

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
