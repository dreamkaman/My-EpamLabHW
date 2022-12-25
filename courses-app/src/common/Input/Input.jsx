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
				<input
					name='searchText'
					type='text'
					style={
						labelTxt
							? { width: width + 'px', marginRight: '10px', marginLeft: '5px' }
							: { width: width + 'px', marginRight: '10px' }
					}
					className={s.txtInput}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	);
};

export default Input;
