import type { Teacher } from "~/types/schedule/Teacher";

export type Subject = {
	id: number;
	title: string;
	shortTitle?: string;
	teachers: {
		lecture?: Teacher[];
		lab?: Teacher[];
		practice?: Teacher[];
	};
	rooms: {
		lecture?: string;
		lab?: string;
		practice?: string;
	};
	distantLink?: DistantLink;
};

export const emptySubject: Subject = {
	id: -1,
	title: "Окно",
	rooms: {},
	teachers: {},
};

export type DistantLink = {
	type: string;
	link: string;
};
