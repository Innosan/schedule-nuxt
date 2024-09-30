import type { Subject } from "~/types/schedule/Subject";

export const subjects = {
	physics: <Subject>{
		id: 0,
		title: "Физика",
		rooms: {
			lecture: "БФА",
			lab: "Лаборатория физики",
			practice: "Аудитория кафедры 1",
		},
		teachers: {
			lecture: [teachers[0]],
			lab: [teachers[30]],
			practice: [teachers[32]],
		},
	},
	math: <Subject>{
		id: 1,
		title: "Математика",
		rooms: {
			lecture: "7-413",
			practice: "7-118",
		},
		teachers: {
			lecture: [teachers[1]],
			practice: [teachers[31]],
		},
	},
	economics: <Subject>{
		id: 2,
		title: "Основы экономики и менеджмента",
		shortTitle: "Экономика",
		teachers: {},
		rooms: {},
	},
	safety: <Subject>{
		id: 3,
		title: "Безопасность жизнедеятельности",
		shortTitle: "БЖД",
		teachers: {},
		rooms: {},
	},
	physicalEducation: <Subject>{
		id: 4,
		title: "Физическая подготовка",
		shortTitle: "Физ-ра",
		teachers: {
			practice: [teachers[8]],
		},
		rooms: {
			practice: "Кафедра физ. воспитания",
		},
	},
	it: <Subject>{
		id: 5,
		title: "Информационные технологии и программирование",
		shortTitle: "Прога",
		rooms: {},
		teachers: {},
	},
	speech: <Subject>{
		id: 6,
		title: "Культура речи и деловое общение",
		rooms: {},
		teachers: {},
	},
	history: <Subject>{
		id: 7,
		title: "История России",
		rooms: {},
		teachers: {},
	},
	python: <Subject>{
		id: 8,
		title: "Программирование на языке Python",
		rooms: {},
		teachers: {},
	},
	english: <Subject>{
		id: 9,
		title: "Иностранный язык",
		shortTitle: "Английский",
		rooms: {
			practice: "Кафедра ин. языка",
		},
		teachers: {
			practice: [teachers[33]],
		},
	},
	architecture: <Subject>{
		id: 10,
		title: "Архитектура информационных систем",
		shortTitle: "Архитектура",
		rooms: {
			lecture: "САИТ",
			practice: "САИТ",
		},
		teachers: {
			lecture: [teachers[16]],
			practice: [teachers[16]],
		},
	},
	sociology: <Subject>{
		id: 11,
		title: "Социология и психология",
		shortTitle: "Социология",
		rooms: {
			lecture: "211",
			practice: "395",
		},
		teachers: {
			lecture: [teachers[17]],
			practice: [teachers[17]],
		},
	},
	discreteMath: <Subject>{
		id: 12,
		title: "Дискретная математика",
		rooms: {
			lecture: "САИТ",
			practice: "САИТ",
		},
		teachers: {
			lecture: [teachers[18]],
			practice: [teachers[21]],
		},
	},
	metrology: <Subject>{
		id: 13,
		title: "Метрология, стандартизация и сертификация",
		shortTitle: "Стандартизация",
		rooms: {
			lecture: "394",
			practice: "Кафедра АПХП",
		},
		teachers: {
			lecture: [teachers[20]],
			practice: [teachers[20]],
		},
	},
	operatingSystems: <Subject>{
		id: 14,
		title: "Операционные системы",
		shortTitle: "ОС",
		rooms: {
			lecture: "САИТ",
			practice: "САИТ",
		},
		teachers: {
			lecture: [teachers[16]],
			practice: [teachers[16]],
		},
	},
	militaryTraining: <Subject>{
		id: 15,
		title: "Основы военной подготовки",
		shortTitle: "Военка",
		rooms: {
			lecture: "362",
			practice: "350",
		},
		teachers: {
			lecture: [teachers[22]],
			practice: [teachers[23]],
		},
	},
	computingSystems: <Subject>{
		id: 16,
		title: "Вычислительные системы, сети и телекоммуникации",
		shortTitle: "Системы и сети",
		rooms: {
			lecture: "САПРиУ",
			lab: "САПРиУ",
			practice: "САПРиУ",
		},
		teachers: {
			lecture: [teachers[3]],
			lab: [teachers[3], teachers[24]],
			practice: [teachers[3], teachers[24]],
		},
	},
	databases: <Subject>{
		id: 17,
		title: "Базы данных",
		shortTitle: "БД",
		rooms: {
			lecture: "309",
			practice: "САПРиУ",
		},
		teachers: {
			lecture: [teachers[25]],
			practice: [teachers[26]],
		},
	},
	softwareDevelopment: <Subject>{
		id: 18,
		title: "Разработка программных систем",
		shortTitle: "Разработка систем",
		rooms: {
			lecture: "САПРиУ",
			practice: "САПРиУ",
		},
		teachers: {
			lecture: [teachers[27]],
			practice: [teachers[27]],
		},
	},
};
