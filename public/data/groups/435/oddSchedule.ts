import type { Schedule } from "~/types/schedule/Schedule";
import { subjects } from "~/utils/subjects";
import { lessonTypes } from "~/utils/lessonTypes";
import { teachers } from "~/utils/teachers";
import { emptyLesson } from "~/types/schedule/Lesson";

export const oddScheduleChemical: Schedule = {
	type: "odd",
	days: [
		// monday
		[
			emptyLesson,
			emptyLesson,
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
			{
				subject: subjects[0],
				type: lessonTypes.labWork,
				teachers: [teachers[30]],
				room: "Аудитория кафедры",
			},
		],

		// tuesday
		[
			emptyLesson,
			{
				subject: subjects[1],
				type: lessonTypes.practice,
				teachers: [teachers[31]],
				room: "7-133",
			},
			{
				subject: subjects[17],
				type: lessonTypes.lecture,
				teachers: [teachers[25]],
				additionalGroups: "433, 434",
				room: "309",
			},
			{
				subject: subjects[17],
				type: lessonTypes.practice,
				teachers: [teachers[26]],
				room: "САПРиУ",
			},
			{
				subject: subjects[18],
				type: lessonTypes.practice,
				teachers: [teachers[27]],
				room: "САПРиУ",
			},
		],

		// wednesday
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[32]],
				room: "Аудитория физики №1",
			},
			{
				subject: subjects[1],
				type: lessonTypes.practice,
				teachers: [teachers[31]],
				room: "7-118",
			},
			{
				subject: subjects[1],
				type: lessonTypes.lecture,
				teachers: [teachers[1]],
				room: "7-413",
				additionalGroups: "433, 434",
			},
			emptyLesson,
			emptyLesson,
		],

		// thursday
		[
			{
				subject: subjects[16],
				type: lessonTypes.lecture,
				teachers: [teachers[3]],
				room: "САПРиУ",
				additionalGroups: "433, 434",
			},
			{
				subject: subjects[9],
				type: lessonTypes.practice,
				teachers: [teachers[12]],
				room: "Кафедра ин. языка",
			},
			{
				subject: subjects[16],
				type: lessonTypes.labWork,
				teachers: [teachers[24]],
				room: "САПРиУ",
			},
			{
				subject: subjects[12],
				type: lessonTypes.practice,
				teachers: [teachers[21]],
				room: "CАИТ",
			},
		],

		// friday
		[
			emptyLesson,
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
			{
				subject: subjects[15],
				type: lessonTypes.lecture,
				teachers: [teachers[23]],
				room: "362",
			},
			{
				subject: subjects[15],
				type: lessonTypes.practice,
				teachers: [teachers[28]],
				room: "352",
			},
			emptyLesson,
		],
	],
};
