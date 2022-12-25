import { useState } from 'react';

import Button from 'common/Button';
import Input from 'common/Input';
import Title from 'common/Title';

import { durationTransform } from 'helpers/pipeDuration';
import * as db from 'helpers/mockedDataBase';

import s from './CreateCourse.module.css';

const authorsInitial = db.mockedAuthorsList;

console.log(authorsInitial);

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');
	const [authors, setAuthors] = useState(authorsInitial);

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
		<form className={s.createCourseForm}>
			<div className={s.courseHeader}>
				<Input
					labelTxt='Title'
					value={title}
					onChange={onChangeTitleHandle}
					width='400px'
				/>
				<Button btnText='Create course' type='submit' />
			</div>
			<div className={s.descriptionBlock}>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					className={s.descriptionText}
					placeholder='Enter description'
				></textarea>
			</div>
			<div className={s.courseProperties}>
				<div className={s.leftSide}>
					<div className={s.addAuthorBlock}>
						<Title titleText='Add author' />
						<Input
							labelTxt='Author name'
							width={'100%'}
							value={authorName}
							onChange={onChangeAuthorNameHandle}
							placeholder={'Enter author name...'}
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
							placeholder={'Enter duration in minutes...'}
						/>
						<p className={s.durationTransformed}>
							Duration: <span>{durationTransform(duration)}</span> hours
						</p>
					</div>
				</div>
				<div className={s.rightSide}>
					<Title titleText='Authors' />
					{authors.length && (
						<ul>
							{authors.map((author) => {
								return (
									<li key={author.id} className={s.authorListItem}>
										{author.name}
										<Button btnText='Add author' />
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
