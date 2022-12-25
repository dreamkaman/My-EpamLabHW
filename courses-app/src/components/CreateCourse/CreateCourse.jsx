import { useState } from 'react';

import Button from 'common/Button';
import Input from 'common/Input';
import Title from 'common/Title';

import s from './CreateCourse.module.css';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');

	const onChangeTitleHandle = (e) => {
		setTitle(e.target.value);
	};

	const onChangeAuthorNameHandle = (e) => {
		setAuthorName(e.target.value);
	};

	const onChangeDurationHandle = (e) => {
		setDuration(e.target.value);
	};

	return (
		<form>
			<div>
				<Input labelTxt='Title' value={title} onChange={onChangeTitleHandle} />
				<Button btnText='Create course' type='submit' />
			</div>
			<div>
				<label htmlFor='description'>Description</label>
				<textarea name='description'></textarea>
			</div>
			<div className={s.courseProperties}>
				<div className={s.leftSide}>
					<div>
						<Title titleText='Add author' />
						<Input
							labelTxt='Author name'
							width={200}
							value={authorName}
							onChange={onChangeAuthorNameHandle}
						/>
						<Button btnText='Create author' />
					</div>
					<div>
						<Title titleText='Duration' />
						<Input
							labelTxt='Duration'
							width={200}
							value={duration}
							onChange={onChangeDurationHandle}
						/>
					</div>
				</div>
				<div className={s.rightSide}></div>
			</div>
		</form>
	);
};

export default CreateCourse;
