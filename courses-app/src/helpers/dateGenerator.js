export const dateTransform = (dateString) => {
	const dateObject = new Date(dateString);
	let day = dateObject.getDate();
	let month = dateObject.getMonth();
	const year = dateObject.getFullYear();

	day = day > 9 ? day : `0${day}`;
	month = month + 1 > 9 ? month + 1 : `0${month + 1}`;

	const newDate = `${day}.${month}.${year}`;

	return newDate;
};
