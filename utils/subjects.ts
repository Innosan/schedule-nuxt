import type { DistantLink, Subject } from "~/types/Subject";

export const subjects: Subject[] = [
	{
		id: 0,
		title: "Физика",
	},
	{
		id: 1,
		title: "Математика",
		shortName: "Матеша",
	},
	{
		id: 2,
		title: "Основы экономики и менеджмента",
		shortName: "Экономика",
	},
	{
		id: 3,
		title: "Безопасность жизнедеятельности",
		shortName: "БЖД",
		distantLink: <DistantLink>{
			type: "Курс",
			link: "https://dist.technolog.edu.ru/course/view.php?id=224",
		},
	},
	{
		id: 4,
		title: "Физическая подготовка",
		shortName: "Физ-ра",
	},
	{
		id: 5,
		title: "Информационные технологии и прогр.",
		shortName: "Прога",
	},
	{
		id: 6,
		title: "Культура речи и Деловое общение",
		shortName: "Речь",
	},
	{
		id: 7,
		title: "История России",
		distantLink: <DistantLink>{
			type: "Оценки",
			link: "https://cloud.mail.ru/public/4ws7/6DwwzDDTk",
		},
	},
	{
		id: 8,
		title: "Программирование на языке Python",
		shortName: "Python",
		distantLink: <DistantLink>{
			type: "База?",
			link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		},
	},
	{
		id: 9,
		title: "Иностранный язык",
		shortName: "Английский",
	},
];
