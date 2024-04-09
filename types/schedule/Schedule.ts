import type { Day } from "~/types/schedule/Day";

export type Schedule = {
	type: "odd" | "even";
	days: Day[];
};
