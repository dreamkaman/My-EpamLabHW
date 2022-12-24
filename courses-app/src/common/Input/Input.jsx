import s from './Input.module.css';

const Input = ({ placeholder = '', width = 300, labelTxt = 'Label text' }) => {
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
			/>
		</div>
	);
};

export default Input;
