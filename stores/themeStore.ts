export const useThemeStore = defineStore(
	"theme-store",
	() => {
		const primaryColor = ref("green");
		const grayColor = ref("neutral");

		const setPrimaryColor = (newColor: string) => {
			primaryColor.value = newColor;
			useAppConfig().ui.primary = newColor;
		};

		const setGrayColor = (newColor: string) => {
			grayColor.value = newColor;
			useAppConfig().ui.gray = newColor;
		};

		return {
			color: primaryColor,
			gray: grayColor,
			setColor: setPrimaryColor,
			setGray: setGrayColor,
		};
	},
	{ persist: true },
);
