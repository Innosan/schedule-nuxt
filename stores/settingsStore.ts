export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const scheduleDisplay = ref("accordion");

		const lessonCardState = ref("default");

		const showSchedule = ref(getDaysUntilExamSession() !== 0);

		const setScheduleDisplay = (
			newDisplay: string = "accordion" || "nav-list" || "table",
		) => {
			scheduleDisplay.value = newDisplay;
		};

		const setLessonCardState = (newState: string) => {
			lessonCardState.value = newState;
		};

		const toggleScheduleState = () => {
			showSchedule.value = !showSchedule.value;
		};

		return {
			scheduleDisplay,
			lessonCardState,
			showSchedule,
			setScheduleDisplay,
			setLessonCardState,
			toggleScheduleState,
		};
	},
	{
		persist: {
			storage: persistedState.cookiesWithOptions({
				sameSite: "strict",
				maxAge: 31536000,
			}),
		},
	},
);
