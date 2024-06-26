import type { NavigationLink } from "~/types/utility/NavigationLink";

export const officialLinks: NavigationLink[] = [
	{
		id: 4,
		to: "https://media.technolog.edu.ru/index.php?lang=ru",
		label: "Личный кабинет",
		icon: "i-heroicons-user-circle",
	},
	{
		id: 2,
		to: "https://dist.technolog.edu.ru/my/",
		label: "Moodle",
		icon: "i-academicons-moodle",
	},
	{
		id: 1,
		to: "https://technolog.edu.ru/",
		label: "ВУЗ",
		icon: "i-heroicons-academic-cap",
	},
	{
		id: 3,
		to: "https://technolog.edu.ru/studentam/raspisanie_zanyatij_i_ekzamenov/",
		label: "Расписание",
		icon: "i-heroicons-calendar-days-solid",
	},
];

export const unofficialLinks: NavigationLink[] = [
	{
		id: 1,
		to: "https://drive.google.com/drive/u/0/folders/1tRwGq_TtKtJpvWDM1v5a7gU5kIZ81w3f",
		label: "Общая папка",
		icon: "i-entypo-social-google-drive",
	},
	{
		id: 2,
		to: "https://disk.yandex.ru/d/gXpHrPbEbn2p4w",
		label: "ХИМТЯН",
		icon: "i-gravity-ui-logo-yandex",
	},
	{
		id: 4,
		to: "https://github.com/Innosan/schedule-nuxt",
		label: "GitHub",
		icon: "i-ri-github-fill",
	},
	{
		id: 3,
		to: "https://vk.com/kreimer_games",
		label: "Kreimer Games",
		icon: "i-basil-vk-solid",
	},
];
