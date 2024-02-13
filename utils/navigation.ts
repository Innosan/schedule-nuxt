import type { NavigationLink } from "~/types/general";

export const navigation: NavigationLink[] = [
	{
		id: 1,
		to: "/",
		label: "Расписание",
		icon: "i-heroicons-calendar-days-solid",
	},
	{
		id: 2,
		to: "/about",
		label: "Ссылки",
		icon: "i-heroicons-information-circle",
	},
	{
		id: 3,
		to: "/subjects",
		label: "Предметы",
		icon: "i-heroicons-rectangle-stack",
	},
];

export const socials: NavigationLink[] = [
	{
		id: 1,
		to: "https://github.com",
		label: "GitHub",
		icon: "i-octicon-mark-github-16",
	},
	{
		id: 2,
		to: "https://telegram.com",
		label: "Telegram",
		icon: "i-streamline-telegram-solid",
	},
];
