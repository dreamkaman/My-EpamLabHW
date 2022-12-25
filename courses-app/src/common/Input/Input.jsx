import s from './Input.module.css';

const Input = ({
	placeholder = '',
	width = '100%',
	labelTxt = '',
	value = '',
	onChange,
}) => {
	return (
		<label htmlFor='searchText' className={s.labelTxt}>
			{labelTxt}
			<input
				name='searchText'
				type='text'
				style={{ width: width }}
				className={s.txtInput}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input;
