import { mockedAuthorsList } from 'helpers/mockedDataBase';
export const getAuthors = (authorsArray) => {
	const authorsName = authorsArray.map((authorId) => {
		const foundAuthor = mockedAuthorsList.find((item) => item.id === authorId);
		return foundAuthor.name;
	});

	return authorsName.join(', ');
};
