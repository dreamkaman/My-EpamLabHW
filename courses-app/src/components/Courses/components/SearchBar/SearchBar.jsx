import Input from 'common/Input';
import Button from 'common/Button';

import s from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div>
			<form action='#' className={s.searchForm}>
				<Input placeholder='Enter course name...' />
				<Button btnText='Search' type='submit' />
			</form>
		</div>
	);
};

export default SearchBar;
