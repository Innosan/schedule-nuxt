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
