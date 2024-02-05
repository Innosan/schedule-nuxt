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
