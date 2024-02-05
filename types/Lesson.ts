import type { Subject } from "~/types/Subject";
import type { LessonType } from "~/types/LessonType";
import type { Teacher } from "~/types/Teacher";

export type Lesson = {
	subject: Subject;
	type: LessonType;
	teachers: Teacher[];
};
