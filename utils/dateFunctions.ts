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
	1: "Понедельник",
	2: "Вторник",
	3: "Среда",
	4: "Четверг",
	5: "Пятница",
	6: "Суббота",
	7: "Воскресенье",
};

export const timeMapper = {
	0: { start: "9:30", end: "11:10" },
	1: { start: "11:30", end: "13:10" },
	2: { start: "14:00", end: "15:40" },
	3: { start: "16:00", end: "17:40" },
};
