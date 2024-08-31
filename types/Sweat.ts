export type Sweat = {
	subjectId: number;
	sweatRating: number;
};

export const emptySweat: Sweat = {
	subjectId: -1,
	sweatRating: 0,
};

export const dropChanceMapper = {
	1: 5,
	2: 10,
	3: 20,
	4: 30,
	5: 35,
};
