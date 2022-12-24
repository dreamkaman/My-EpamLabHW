import Button from '../../../../common/Button';

import s from './LogOut.module.css';

const LogOut = ({ userName = 'Anonymous', onclick }) => {
	const onClickHandler = () => {
		onclick(false);
	};
	return (
		<div className={s.wrapper}>
			<p className={s.userName}>{userName}</p>
			<Button btnText='Logout' onClick={onClickHandler} />
		</div>
	);
};

export default LogOut;
