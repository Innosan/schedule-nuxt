export type Subject = {
	id: number;
	title: string;
	shortName?: string;
	distantLink?: DistantLink;
};

export type DistantLink = {
	type: string;
	link: string;
};
