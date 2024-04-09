import type { Grade } from "~/types/schedule/Grade";

export const grades = {
	highTeacher: <Grade>{
		id: 1,
		title: "Старший преподаватель",
	},
	professor: <Grade>{
		id: 2,
		title: "Профессор",
	},
	boss: <Grade>{
		id: 3,
		title: "ВРИО заведующего кафедрой",
	},
	assistantProfessor: <Grade>{
		id: 4,
		title: "Доцент",
	},
};
