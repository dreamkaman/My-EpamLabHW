import Button from 'common/Button';

import s from './SelectedAuthorsList.module.css';

const SelectedAuthorsList = ({ selectedAuthors, onClick }) => {
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
