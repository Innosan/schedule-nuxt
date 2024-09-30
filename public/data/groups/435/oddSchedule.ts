import type { Schedule } from "~/types/schedule/Schedule";
import { lessonTypes } from "~/utils/lessonTypes";
import { createLesson, emptyLesson } from "~/types/schedule/Lesson";

export const oddScheduleChemical: Schedule = {
	type: "odd",
	days: [
		// monday
		[
			emptyLesson,
			emptyLesson,
			createLesson("physicalEducation", lessonTypes.practice),
			createLesson("physics", lessonTypes.labWork),
		],

		// tuesday
		[
			emptyLesson,
			createLesson("math", lessonTypes.practice),
			createLesson("databases", lessonTypes.lecture, "433, 434"),
			createLesson("databases", lessonTypes.practice),
			createLesson("softwareDevelopment", lessonTypes.practice),
		],

		// wednesday
		[
			emptyLesson,
			createLesson("math", lessonTypes.practice),
			createLesson("math", lessonTypes.lecture, "433, 434"),
			createLesson("discreteMath", lessonTypes.practice),
		],

		// thursday
		[
			createLesson("computingSystems", lessonTypes.lecture, "433, 434"),
			createLesson("english", lessonTypes.practice),
			createLesson("computingSystems", lessonTypes.labWork),
			emptyLesson,
		],

		// friday
		[
			emptyLesson,
			createLesson("physicalEducation", lessonTypes.practice),
			createLesson("militaryTraining", lessonTypes.lecture),
			createLesson("militaryTraining", lessonTypes.practice),
		],
	],
};
