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
			<li
				key={foundAuthor.id}
				style={{ display: 'flex', alignContent: 'center' }}
			>
				{foundAuthor.name}
				<button
					id={foundAuthor.id}
					type='button'
					style={{
						color: 'red',
						border: 'none',
						backgroundColor: 'transparent',
						marginLeft: '10px',
					}}
				>
					X
				</button>
			</li>
		);
	});

	return <ul>{markUp}</ul>;
};
