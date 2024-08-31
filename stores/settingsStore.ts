import { groups } from "~/types/Group";

export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const scheduleDisplay = ref("accordion");

		const lessonCardState = ref("default");

		const showSchedule = ref(true);
		const showDropChance = ref(true);

		const groupNumber = ref(groups[0].id);

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

		const toggleDropChanceState = () => {
			showDropChance.value = !showDropChance.value;
		};

		const setGroupNumber = (number: number) => {
			groupNumber.value = number;
		};

		return {
			scheduleDisplay,
			lessonCardState,
			showSchedule,
			groupNumber,
			showDropChance,
			setScheduleDisplay,
			setLessonCardState,
			setGroupNumber,
			toggleScheduleState,
			toggleDropChanceState,
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
