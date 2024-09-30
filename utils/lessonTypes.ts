import type { LessonType } from "~/types/schedule/LessonType";

export const lessonTypes = {
	practice: <LessonType>{
		id: 0,
		title: "Практика",
		value: "practice",
		color: "red",
		icon: "i-heroicons-wrench-screwdriver-solid",
	},
	lecture: <LessonType>{
		id: 1,
		title: "Лекция",
		value: "lecture",
		color: "blue",
		icon: "i-heroicons-book-open-solid",
	},
	labWork: <LessonType>{
		id: 2,
		title: "Лабораторная работа",
		value: "lab",
		color: "pink",
		icon: "i-heroicons-beaker-solid",
	},
	courseWork: <LessonType>{
		id: 4,
		title: "Курсовая работа",
		value: "course",
		color: "yellow",
		icon: "i-heroicons-presentation-chart-bar-solid",
	},
};
