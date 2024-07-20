export type Subject = {
	id: number;
	title: string;
	shortName?: string;
	distantLink?: DistantLink;
};

export const emptySubject: Subject = {
	id: -1,
	title: "Пары нет",
};

export type DistantLink = {
	type: string;
	link: string;
};
