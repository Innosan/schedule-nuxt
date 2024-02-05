import type { LessonType } from "~/types/LessonType";

export const lessonTypes = {
	practice: <LessonType>{
		id: 0,
		title: "Практика",
		color: "red",
	},
	lecture: <LessonType>{
		id: 1,
		title: "Лекция",
		color: "blue",
	},
	labWork: <LessonType>{
		id: 2,
		title: "Лабораторная работа",
		color: "pink",
	},
	courseWork: <LessonType>{
		id: 4,
		title: "Курсовая работа",
		color: "yellow",
	},
};
