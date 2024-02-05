import type { Schedule } from "~/types/Schedule";
import { subjects } from "~/utils/subjects";
import { lessonTypes } from "~/utils/lessonTypes";
import { teachers } from "~/utils/teachers";

export const firstSchedule: Schedule = {
	type: "even",
	days: [
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.labWork,
				teachers: [teachers[0]],
			},
		],
	],
};

export const secondSchedule: Schedule = {
	type: "odd",
	days: [
		[
			{
				subject: subjects[1],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{},
		],
		[
			{
				subject: subjects[0],
				type: lessonTypes.practice,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.lecture,
				teachers: [teachers[0]],
			},
			{
				subject: subjects[0],
				type: lessonTypes.labWork,
				teachers: [teachers[0]],
			},
		],
	],
};
