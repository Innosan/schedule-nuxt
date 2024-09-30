import type { Schedule } from "~/types/schedule/Schedule";
import { lessonTypes } from "~/utils/lessonTypes";
import { createLesson, emptyLesson } from "~/types/schedule/Lesson";

export const evenScheduleFreaks: Schedule = {
	type: "even",
	days: [
		// monday
		[
			createLesson("architecture", lessonTypes.practice),
			createLesson("sociology", lessonTypes.lecture, "437, 332, 1310"),
			createLesson("math", lessonTypes.lecture, "436, 437"),
			createLesson("physics", lessonTypes.practice),
		],

		// tuesday
		[
			createLesson("metrology", lessonTypes.practice),
			createLesson("discreteMath", lessonTypes.practice),
			createLesson("physics", lessonTypes.labWork),
			createLesson("metrology", lessonTypes.lecture, "437"),
		],

		// wednesday
		[
			emptyLesson,
			createLesson("physicalEducation", lessonTypes.practice),
			createLesson("operatingSystems", lessonTypes.lecture, "437"),
			createLesson("sociology", lessonTypes.practice),
		],

		// thursday
		[
			emptyLesson,
			emptyLesson,
			createLesson("math", lessonTypes.practice),
			createLesson("english", lessonTypes.practice),
		],

		// friday
		[
			createLesson(
				"militaryTraining",
				lessonTypes.lecture,
				"5 факультет",
			),
			createLesson("militaryTraining", lessonTypes.practice),
			createLesson("operatingSystems", lessonTypes.practice),
			emptyLesson,
		],
	],
};
