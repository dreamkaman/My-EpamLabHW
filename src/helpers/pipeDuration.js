export const durationTransform = (duration) => {
	let hours = Math.floor(duration / 60);
	let minutes = duration - 60 * hours;

	hours = hours > 9 ? hours : `0${hours}`;
	minutes = minutes > 9 ? minutes : `0${minutes}`;

	return `${hours}:${minutes}`;
};
