import s from './Input.module.css';

const Input = ({
	name = 'noname',
	placeholder = '',
	width = '100%',
	labelTxt = '',
	value = '',
	onChange,
}) => {
	return (
		<label htmlFor={name} className={s.labelTxt}>
			{labelTxt}
			<input
				name={name}
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
