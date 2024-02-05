import type { Teacher } from "~/types/Teacher";
import { subjects } from "~/utils/subjects";

export const teachers: Teacher[] = [
	{
		id: 0,
		firstName: "Бычков",
		lastName: "",
		middleName: "",
		image: "",
		subjects: [subjects[0], subjects[1]],
	},
];
