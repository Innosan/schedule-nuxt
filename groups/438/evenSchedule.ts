import type { Schedule } from "~/types/schedule/Schedule";
import { subjects } from "~/utils/subjects";
import { lessonTypes } from "~/utils/lessonTypes";
import { teachers } from "~/utils/teachers";
import { emptyLesson } from "~/types/schedule/Lesson";

export const evenScheduleFreaks: Schedule = {
	type: "even",
	days: [
		// monday
		[
			{
				subject: subjects[5],
				type: lessonTypes.practice,
				teachers: [teachers[15]],
				room: "Аудитория физики №2 (за БФА)",
			},
			{
				subject: subjects[1],
				type: lessonTypes.lecture,
				teachers: [teachers[1]],
				room: "7-413",
				additionalGroups: "4304, 4305, 4306",
			},
			{
				subject: subjects[2],
				type: lessonTypes.lecture,
				teachers: [teachers[2]],
				room: "301",
				additionalGroups: "3 факультет",
			},
			emptyLesson,
		],

		// tuesday
		[
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
			{
				subject: subjects[3],
				type: lessonTypes.lecture,
				teachers: [teachers[4]],
				room: "215",
				additionalGroups: "4306, 1 факультет",
			},
			{
				subject: subjects[1],
				type: lessonTypes.practice,
				teachers: [teachers[7]],
				room: "7-120",
			},
			{
				subject: subjects[6],
				type: lessonTypes.practice,
				teachers: [teachers[9]],
				room: "7-321",
			},
		],

		// wednesday
		[
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
				room: "БФА",
				additionalGroups: "4306",
			},
			{
				subject: subjects[7],
				type: lessonTypes.practice,
				teachers: [teachers[10]],
				room: "306",
			},
			{
				subject: subjects[5],
				type: lessonTypes.practice,
				teachers: [teachers[3]],
				room: "САПРиУ",
			},
			emptyLesson,
		],

		// thursday
		[
			{
				subject: subjects[2],
				type: lessonTypes.practice,
				teachers: [teachers[2]],
				room: "259",
			},
			{
				subject: subjects[7],
				type: lessonTypes.practice,
				teachers: [teachers[10]],
				room: "394",
			},
			{
				subject: subjects[8],
				type: lessonTypes.lecture,
				teachers: [teachers[6]],
				room: "СА",
				additionalGroups: "4306",
			},
			{
				subject: subjects[9],
				type: lessonTypes.practice,
				teachers: [teachers[13], teachers[12]],
				room: "7",
			},
		],

		// friday
		[
			{
				subject: subjects[7],
				type: lessonTypes.lecture,
				teachers: [teachers[11]],
				room: "211",
				additionalGroups: "5 факультет",
			},
			{
				subject: subjects[8],
				type: lessonTypes.practice,
				teachers: [teachers[6]],
				room: "СА",
			},
			emptyLesson,
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
		],
	],
};
