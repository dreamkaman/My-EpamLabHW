import { useContext } from 'react';

import Logo from './components/Logo/Logo';
import LogOut from './components/LogOut/LogOut';
import Button from 'common/Button';

import { Context } from 'Context';

import s from './Header.module.css';

const Header = () => {
	const context = useContext(Context);

	const onClickHandle = () => {
		context.onClickHandle(true);
	};

	return (
		<header>
			<div className={s.wrapper}>
				<Logo />
				<p className={s.logoText}>courses</p>
			</div>
			{!context.isLoggined && (
				<Button btnText='Login' onClick={onClickHandle} />
			)}
			{context.isLoggined && <LogOut onclick={context.onClickHandle} />}
		</header>
	);
};

export default Header;
