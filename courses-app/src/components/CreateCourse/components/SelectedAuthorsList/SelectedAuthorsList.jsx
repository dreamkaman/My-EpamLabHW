import Button from 'common/Button';

import { mockedAuthorsList } from 'helpers/mockedDataBase';

import s from './SelectedAuthorsList.module.css';

const SelectedAuthorsList = ({ selectedAuthors }) => {
	return (
		<ul>
			{selectedAuthors.map((authorId) => {
				const foundAuthor = mockedAuthorsList.find(
					(item) => item.id === authorId
				);
				return (
					<li key={foundAuthor.id} className={s.authorsListItem}>
						{foundAuthor.name}
						<Button id={foundAuthor.id} btnText='X' />
					</li>
				);
			})}
		</ul>
	);
};

export default SelectedAuthorsList;
