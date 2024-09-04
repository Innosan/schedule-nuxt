import type { Schedule } from "~/types/schedule/Schedule";
import { subjects } from "~/utils/subjects";
import { lessonTypes } from "~/utils/lessonTypes";
import { teachers } from "~/utils/teachers";
import { emptyLesson } from "~/types/schedule/Lesson";

export const oddScheduleFreaks: Schedule = {
	type: "odd",
	days: [
		// monday
		[
			{
				subject: subjects[10],
				type: lessonTypes.practice,
				teachers: [teachers[16]],
				room: "САИТ",
			},
			{
				subject: subjects[12],
				type: lessonTypes.lecture,
				teachers: [teachers[18]],
				room: "САИТ",
				additionalGroups: "437",
			},
			{
				subject: subjects[1],
				type: lessonTypes.lecture,
				teachers: [teachers[19]],
				room: "7-405",
				additionalGroups: "436, 437",
			},
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]], // TODO: add teacher
				room: "Аудитория физики №2",
			},
		],

		// tuesday
		[
			emptyLesson,
			{
				subject: subjects[12],
				type: lessonTypes.practice,
				teachers: [teachers[21]],
				room: "САИТ",
			},
			emptyLesson,
			emptyLesson,
		],

		// wednesday
		[
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
				room: "БФА",
				additionalGroups: "436, 437",
			},
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
			{
				subject: subjects[14],
				type: lessonTypes.lecture,
				teachers: [teachers[16]],
				room: "САИТ",
				additionalGroups: "437",
			},
			{
				subject: subjects[11],
				type: lessonTypes.practice,
				teachers: [teachers[17]],
				room: "395",
			},
		],

		// thursday
		[
			{
				subject: subjects[10],
				type: lessonTypes.lecture,
				teachers: [teachers[16]],
				room: "САИТ",
			},
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
			{
				subject: subjects[1],
				type: lessonTypes.practice,
				teachers: [teachers[1]], // TODO: add teacher
				room: "7-319",
			},
			{
				subject: subjects[9],
				type: lessonTypes.practice,
				teachers: [teachers[13], teachers[12]],
				room: "Кафедра ин. языка",
			},
		],

		// friday
		[
			{
				subject: subjects[15],
				type: lessonTypes.lecture,
				teachers: [teachers[22]],
				room: "362",
				additionalGroups: "5 факультет",
			},
			{
				subject: subjects[15],
				type: lessonTypes.practice,
				teachers: [teachers[23]],
				room: "350",
			},
			{
				subject: subjects[14],
				type: lessonTypes.practice,
				teachers: [teachers[16]],
				room: "САИТ",
			},
			emptyLesson,
		],
	],
};
