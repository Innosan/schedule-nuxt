import type { Schedule } from "~/types/schedule/Schedule";
import { oddScheduleFreaks } from "~/groups/438/oddSchedule";
import { oddScheduleChemical } from "~/groups/435/oddSchedule";
import { evenScheduleChemical } from "~/groups/435/evenSchedule";
import { evenScheduleFreaks } from "~/groups/438/evenSchedule";

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
