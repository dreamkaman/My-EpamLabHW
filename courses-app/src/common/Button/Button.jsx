import s from './Button.module.css';

const Button = ({ btnText, onClick, type = 'button' }) => {
	return (
		<button className={s.btn} type={type} onClick={onClick}>
			{btnText}
		</button>
	);
};

export default Button;
