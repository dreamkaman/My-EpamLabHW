import s from './Input.module.css';

const Input = ({
	placeholder = '',
	width = 300,
	labelTxt = '',
	value = '',
	onChange,
}) => {
	return (
		<div className={s.wrapper}>
			<label htmlFor='searchText' className={s.labelTxt}>
				{labelTxt}
			</label>
			<input
				name='searchText'
				type='text'
				style={{ width: width + 'px', marginRight: '10px' }}
				className={s.txtInput}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
