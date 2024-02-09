import type { Schedule } from "~/types/Schedule";
import { subjects } from "~/utils/subjects";
import { lessonTypes } from "~/utils/lessonTypes";
import { teachers } from "~/utils/teachers";

export const firstSchedule: Schedule = {
	type: "even",
	days: [
		// monday
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
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
				additionalGroups: "3 фак",
			},
			{},
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
				additionalGroups: "4306, 1 фак",
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
			{},
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
				teachers: [teachers[12]],
				room: "СА",
				additionalGroups: "4306",
			},
			{
				subject: subjects[9],
				type: lessonTypes.practice,
				teachers: [teachers[0], teachers[13]],
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
				additionalGroups: "5 фак",
			},
			{
				subject: subjects[8],
				type: lessonTypes.practice,
				teachers: [teachers[12]],
				room: "СА",
			},
			{},
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
		],
	],
};

export const secondSchedule: Schedule = {
	type: "odd",
	days: [
		// monday
		[
			{
				subject: subjects[0],
				type: lessonTypes.labWork,
				teachers: [teachers[0]],
				room: "Аудитория кафедры",
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
				additionalGroups: "3 фак",
			},
			{
				subject: subjects[3],
				type: lessonTypes.practice,
				teachers: [teachers[4]],
				room: "301",
				additionalGroups: "3 фак",
			},
		],

		// tuesday
		[
			{
				subject: subjects[5],
				type: lessonTypes.lecture,
				teachers: [teachers[5], teachers[3]],
				room: "САПРиУ",
				additionalGroups: "4306",
			},
			{
				subject: subjects[3],
				type: lessonTypes.lecture,
				teachers: [teachers[4]],
				room: "215",
				additionalGroups: "4306, 1 фак",
			},
			{
				subject: subjects[1],
				type: lessonTypes.practice,
				teachers: [teachers[7]],
				room: "7-120",
			},
			{},
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
			{
				subject: subjects[6],
				type: lessonTypes.lecture,
				teachers: [teachers[9]], // TODO: change this
				room: "7-408",
				additionalGroups: "4304, 4305, 4306",
			},
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
				teachers: [teachers[12]],
				room: "СА",
				additionalGroups: "4306",
			},
			{
				subject: subjects[9],
				type: lessonTypes.practice,
				teachers: [teachers[0], teachers[13]],
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
				additionalGroups: "5 фак",
			},
			{
				subject: subjects[8],
				type: lessonTypes.practice,
				teachers: [teachers[12]],
				room: "СА",
			},
			{
				subject: subjects[5],
				type: lessonTypes.courseWork,
				teachers: [teachers[3]],
				room: "САПРиУ",
			},
			{
				subject: subjects[4],
				type: lessonTypes.practice,
				teachers: [teachers[8]],
				room: "Кафедра физического воспитания",
			},
		],
	],
};
