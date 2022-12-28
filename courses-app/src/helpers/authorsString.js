export const getAuthorsName = (allAuthors) => {
	const authorsName = allAuthors.map((author) => author.name);

	return authorsName.join(', ');
};

export const getAuthorsIdArray = (allAuthors) => {
	const AuthorsIdArray = allAuthors.map((author) => author.id);

	return AuthorsIdArray;
};

export const convertAuthorsIdToNames = (authorsIdArray, allAuthors) => {
	const authorsName = authorsIdArray.map((authorId) => {
		const foundAuthor = allAuthors.find((author) => author.id === authorId);

		return foundAuthor.name;
	});

	return authorsName.join(', ');
};
