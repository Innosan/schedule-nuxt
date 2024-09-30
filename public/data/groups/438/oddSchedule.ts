import type { Schedule } from "~/types/schedule/Schedule";
import { lessonTypes } from "~/utils/lessonTypes";
import { createLesson, emptyLesson } from "~/types/schedule/Lesson";

export const oddScheduleFreaks: Schedule = {
	type: "odd",
	days: [
		// monday
		[
			createLesson("architecture", lessonTypes.practice),
			createLesson("discreteMath", lessonTypes.lecture, "437"),
			createLesson("math", lessonTypes.lecture, "436, 437"),
			createLesson("physics", lessonTypes.practice),
		],

		// tuesday
		[
			emptyLesson,
			createLesson("discreteMath", lessonTypes.practice),
			emptyLesson,
			emptyLesson,
		],

		// wednesday
		[
			createLesson("physics", lessonTypes.lecture, "436, 437"),
			createLesson("physicalEducation", lessonTypes.practice),
			createLesson("operatingSystems", lessonTypes.lecture, "437"),
			createLesson("sociology", lessonTypes.practice),
		],

		// thursday
		[
			createLesson("architecture", lessonTypes.lecture, "437"),
			createLesson("physicalEducation", lessonTypes.practice),
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
