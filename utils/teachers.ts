import type { Teacher } from "~/types/Teacher";
import { subjects } from "~/utils/subjects";
import { grades } from "~/utils/grades";

export const teachers: Teacher[] = [
	{
		id: 0,
		firstName: "Игорь",
		lastName: "Куянов",
		middleName: "Александрович",
		grade: grades.professor,
		image: "",
		subjects: [subjects[0]],
	},
	{
		id: 1,
		firstName: "Татьяна",
		lastName: "Слободинская",
		middleName: "Васильевна",
		grade: grades.boss,
		image: "",
		subjects: [subjects[1]],
	},
	{
		id: 2,
		firstName: "Павел",
		lastName: "Фарберов",
		middleName: "Яковлевич",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[2]],
	},
	{
		id: 3,
		firstName: "Алексей",
		lastName: "Федин",
		middleName: "Константинович",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[5]],
	},
	{
		id: 4,
		firstName: "Наталья",
		lastName: "Гуськова",
		middleName: "Владимировна",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[3]],
	},
	{
		id: 5,
		firstName: "Иван",
		lastName: "Корниенко",
		middleName: "Григорьевич",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[5]],
	},
	{
		id: 6,
		firstName: "Андрей",
		lastName: "Гайков",
		middleName: "Владимирович",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[8]],
	},
	{
		id: 7,
		firstName: "Татьяна",
		lastName: "Винник",
		middleName: "Викторовна",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[1]],
	},
	{
		id: 8,
		firstName: "Дедов",
		lastName: "Банда",
		middleName: "",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[4]],
	},

	// TODO: преподы по речи, физики (практика), истории, английскому
];
