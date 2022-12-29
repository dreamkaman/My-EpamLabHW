import s from './Title.module.css';

const Title = ({ titleText }) => <h3 className={s.title}>{titleText}</h3>;

export default Title;
