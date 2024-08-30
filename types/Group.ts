import type { Schedule } from "~/types/schedule/Schedule";
import { oddScheduleChemical } from "public/data/groups/435/oddSchedule";
import { evenScheduleChemical } from "public/data/groups/435/evenSchedule";
import { oddScheduleFreaks } from "public/data/groups/438/oddSchedule";
import { evenScheduleFreaks } from "public/data/groups/438/evenSchedule";

export type Group = {
	id: number;
	title: string;
	oddSchedule: Schedule;
	evenSchedule: Schedule;
};

export const groups: Group[] = [
	{
		id: 435,
		title: "435",
		oddSchedule: oddScheduleChemical,
		evenSchedule: evenScheduleChemical,
	},
	{
		id: 438,
		title: "438",
		oddSchedule: oddScheduleFreaks,
		evenSchedule: evenScheduleFreaks,
	},
];
