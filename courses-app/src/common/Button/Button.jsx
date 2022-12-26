import s from './Button.module.css';

const Button = ({ id, btnText, onClick, type = 'button', authorName = '' }) => {
	return (
		<button id={id} className={s.btn} type={type} onClick={onClick}>
			{btnText}
		</button>
	);
};

export default Button;
