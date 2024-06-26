import type { Lesson } from "~/types/schedule/Lesson";

export type Day = Lesson[];
export const getNumberOfLessons = (day: Day) => {
	return day.filter((lesson) => Object.keys(lesson).length !== 0).length;
};
