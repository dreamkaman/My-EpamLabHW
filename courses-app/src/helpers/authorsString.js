import { mockedAuthorsList } from 'helpers/mockedDataBase';
export const getAuthors = (authorsArray) => {
	const authorsName = authorsArray.map((authorId) => {
		const foundAuthor = mockedAuthorsList.find((item) => item.id === authorId);
		return foundAuthor.name;
	});

	return authorsName.join(', ');
};

export const getAuthorsMarkUp = (authorsArray) => {
	const markUp = authorsArray.map((authorId) => {
		const foundAuthor = mockedAuthorsList.find((item) => item.id === authorId);
		return (
			<li>
				{foundAuthor.name}
				<button type='button' style={{ color: 'red' }}>
					X
				</button>
			</li>
		);
	});

	return <ul>{markUp}</ul>;
};
