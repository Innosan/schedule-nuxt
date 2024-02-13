export const getNumberOfDay = () => {
	const date = new Date();

	let currentDay = date.getDay();
	if (currentDay === 0) {
		// if it's Sunday
		currentDay = 7; // make it 7
	} else {
		currentDay = currentDay - 1; // shift other days by 1
	}

	return currentDay;
};

const getNumberOfWeek = () => {
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 1);

	return Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
};

export const isCurrentWeekEven = () => {
	return getNumberOfWeek() % 2 === 0;
};

export const dayMapper = {
	1: {
		title: "Понедельник",
		id: "monday",
		shortName: "Пн",
		icon: "i-fluent-emoji-high-contrast-teacup-without-handle",
	},
	2: {
		title: "Вторник",
		id: "tuesday",
		shortName: "Вт",
		icon: "i-fluent-emoji-high-contrast-skull-and-crossbones",
	},
	3: {
		title: "Среда",
		id: "wednesday",
		shortName: "Ср",
		icon: "i-fluent-emoji-high-contrast-frog",
	},
	4: {
		title: "Четверг",
		id: "thursday",
		shortName: "Чт",
		icon: "i-fluent-emoji-high-contrast-beer-mug",
	},
	5: {
		title: "Пятница",
		id: "friday",
		shortName: "Пт",
		icon: "i-fluent-emoji-high-contrast-clinking-beer-mugs",
	},
};

export const timeMapper = {
	0: { start: "9:30", end: "11:00" },
	1: { start: "11:30", end: "13:00" },
	2: { start: "14:00", end: "15:30" },
	3: { start: "16:00", end: "17:30" },
};
