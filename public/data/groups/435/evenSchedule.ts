import type { Schedule } from "~/types/schedule/Schedule";
import { lessonTypes } from "~/utils/lessonTypes";
import { createLesson, emptyLesson } from "~/types/schedule/Lesson";

export const evenScheduleChemical: Schedule = {
	type: "even",
	days: [
		// monday
		[
			emptyLesson,
			createLesson("discreteMath", lessonTypes.lecture, "433, 434"),
			createLesson("physics", lessonTypes.lecture, "433, 434"),
			emptyLesson,
		],

		// tuesday
		[
			emptyLesson,
			emptyLesson,
			createLesson("databases", lessonTypes.lecture, "433, 434"),
			createLesson("databases", lessonTypes.practice),
			createLesson("softwareDevelopment", lessonTypes.practice),
		],

		// wednesday
		[
			emptyLesson,
			createLesson("math", lessonTypes.practice, ""),
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
			createLesson("softwareDevelopment", lessonTypes.lecture),
		],
	],
};
