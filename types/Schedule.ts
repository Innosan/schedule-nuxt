import type { Day } from "~/types/Day";

export type Schedule = {
	type: "odd" | "even";
	days: Day[];
};
