import type { Grade } from "~/types/Grade";

export const grades = {
	highTeacher: <Grade>{
		id: 0,
		title: "Старший преподаватель",
	},
	professor: <Grade>{
		id: 1,
		title: "Профессор",
	},
	boss: <Grade>{
		id: 2,
		title: "ВРИО заведующего кафедрой",
	},
	assistantProfessor: <Grade>{
		id: 3,
		title: "Доцент",
	},
};
