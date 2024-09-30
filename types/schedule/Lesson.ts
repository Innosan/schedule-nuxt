import type { Subject } from "~/types/schedule/Subject";
import type { LessonType } from "~/types/schedule/LessonType";
import type { Teacher } from "~/types/schedule/Teacher";
import { emptySubject } from "~/types/schedule/Subject";

export type Lesson = {
	subject: Subject;
	type: LessonType;
	teachers: Teacher[];
	room: string;
	additionalGroups?: string;
};

export const emptyLesson: Lesson = {
	subject: emptySubject,
	type: <LessonType>{},
	teachers: [],
	room: "",
	additionalGroups: "",
};

export const createLesson = (
	subjectName:
		| "physics"
		| "math"
		| "physicalEducation"
		| "english"
		| "architecture"
		| "sociology"
		| "discreteMath"
		| "metrology"
		| "operatingSystems"
		| "militaryTraining"
		| "computingSystems"
		| "databases"
		| "softwareDevelopment",
	type: LessonType,
	additionalGroups: string = "",
): Lesson => {
	// @ts-ignore
	const subject = subjects[subjectName] as Subject;
	// @ts-ignore
	const teachers = subject.teachers[type.value];
	// @ts-ignore
	const room = subject.rooms[type.value];

	return {
		subject,
		type,
		teachers,
		room,
		additionalGroups: additionalGroups,
	};
};
