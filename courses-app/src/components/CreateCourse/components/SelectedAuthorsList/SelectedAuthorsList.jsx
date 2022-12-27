import { useContext } from 'react';

import Button from 'common/Button';
import { Context } from 'Context';

import s from './SelectedAuthorsList.module.css';

const SelectedAuthorsList = ({ selectedAuthors, onClick }) => {
	const context = useContext(Context);

	console.log('AUTHORS - ', context.authors);

	return (
		<ul>
			{selectedAuthors.map((author) => {
				return (
					<li key={author.id} className={s.authorsListItem}>
						{author.name}
						<Button id={author.id} btnText='X' onClick={onClick} />
					</li>
				);
			})}
		</ul>
	);
};

export default SelectedAuthorsList;
