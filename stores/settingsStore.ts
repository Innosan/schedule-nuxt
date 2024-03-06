export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const scheduleDisplay = ref("accordion");

		const setScheduleDisplay = (
			newDisplay: string = "accordion" || "nav-list" || "table",
		) => {
			scheduleDisplay.value = newDisplay;
		};

		return {
			scheduleDisplay,
			setScheduleDisplay,
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
