import { useContext } from 'react';

import Input from 'common/Input';
import Button from 'common/Button';
import { Context } from 'Context';

import s from './SearchBar.module.css';

const SearchBar = ({ value = '', setFilter }) => {
	const context = useContext(Context);
	console.log(context);

	const onChangeHandle = (e) => {
		setFilter(e.target.value);
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();
		console.log(context);
	};

	return (
		<div>
			<form action='#' className={s.searchForm} onSubmit={onSubmitHandle}>
				<Input
					placeholder='Enter course name...'
					onChange={onChangeHandle}
					value={value}
				/>
				<Button btnText='Search' type='submit' />
			</form>
		</div>
	);
};

export default SearchBar;
