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
		email: "LabsandEverything@gmail.com",
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
		email: "LabsandEverything@gmail.com",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[5]],
	},
	{
		id: 6,
		firstName: "Андрей",
		lastName: "Ga34ka",
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
		firstName: "Кафедры",
		lastName: "Преподы",
		middleName: "Физкультуры",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[4]],
	},
	{
		id: 9,
		firstName: "Александра",
		lastName: "Пономарева",
		middleName: "Александровна",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[6]],
	},
	{
		id: 10,
		firstName: "Ирина",
		lastName: "Потехина",
		middleName: "Павловна",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[7]],
	},
	{
		id: 11,
		firstName: "Петр",
		lastName: "Гостенков",
		middleName: "Анатольевич",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[7]],
	},
	{
		id: 12,
		firstName: "Мария",
		lastName: "Клюс",
		middleName: "Владимировна",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[9]],
	},
	{
		id: 13,
		firstName: "Светлана",
		lastName: "Миронова",
		middleName: "Борисовна",
		grade: grades.highTeacher,
		image: "",
		subjects: [subjects[9]],
	},
	{
		id: 14,
		firstName: "Светлана",
		lastName: "Хотунцова",
		middleName: "Владимировна",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[0]],
	},
	{
		id: 15,
		firstName: "Анатолий",
		lastName: "Холодов",
		middleName: "Андреевич",
		grade: grades.assistantProfessor,
		image: "",
		subjects: [subjects[0]],
	},
];
