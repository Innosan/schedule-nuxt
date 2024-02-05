import type { Subject } from "~/types/Subject";

export type Teacher = {
	id: number;

	firstName: string;
	middleName: string;
	lastName: string;

	phoneNumber?: string;
	email?: string;

	image?: string;
	subjects: Subject[];
};

export const getFullName = (teacher: Teacher) => {
	return `${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`;
};
