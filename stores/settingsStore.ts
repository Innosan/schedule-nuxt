export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const scheduleDisplay = ref("accordion");

		const lessonCardState = ref("default");

		const setScheduleDisplay = (
			newDisplay: string = "accordion" || "nav-list" || "table",
		) => {
			scheduleDisplay.value = newDisplay;
		};

		const setLessonCardState = (newState: string) => {
			lessonCardState.value = newState;
		};

		return {
			scheduleDisplay,
			lessonCardState,
			setScheduleDisplay,
			setLessonCardState,
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
