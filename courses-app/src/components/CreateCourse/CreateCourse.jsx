import { useState, useContext } from 'react';

import Button from 'common/Button';
import Input from 'common/Input';
import Title from 'common/Title';
import { Context } from 'Context';

import { v4 as uuidV4 } from 'uuid';

import { durationTransform } from 'helpers/pipeDuration';
import * as db from 'helpers/mockedDataBase';
import { getAuthors, getAuthorsMarkUp } from 'helpers/authorsString';

import s from './CreateCourse.module.css';

const authorsInitial = db.mockedAuthorsList;

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');
	const [authors, setAuthors] = useState(authorsInitial);
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const context = useContext(Context);

	const onChangeTitleHandle = (e) => {
		setTitle(e.target.value);
	};

	const onChangeAuthorNameHandle = (e) => {
		setAuthorName(e.target.value);
	};

	const onChangeDurationHandle = (e) => {
		setDuration(e.target.value);
	};

	const onCancelClick = () => {
		context.setShowCourses(true);
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();
	};

	const onCreateAuthorClickHandle = (e) => {
		if (authorName && authorName.length > 1) {
			const id = uuidV4();
			setAuthors((prev) => [...prev, { id, name: authorName }]);
			setAuthorName('');
			return;
		}
		alert('Please, enter correct author name');
	};

	const onAddAuthorClickHandle = (e) => {
		console.dir(e.target.id);
		const id = e.target.id;
		setSelectedAuthors((prev) => [id, ...prev]);
	};

	const authorListMarkUp = selectedAuthors.map((author) => {});

	return (
		<form className={s.createCourseForm} onSubmit={onSubmitHandle}>
			<div className={s.courseHeader}>
				<Input
					labelTxt='Title'
					value={title}
					onChange={onChangeTitleHandle}
					width='400px'
					placeholder='Enter title'
				/>
				<div className={s.wrapperBtn}>
					<Button btnText='Create course' type='submit' />
					<Button btnText='Cancel' onClick={onCancelClick} />
				</div>
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
							value={authorName}
							onChange={onChangeAuthorNameHandle}
							placeholder={'Enter author name...'}
						/>
						<Button
							btnText='Create author'
							onClick={onCreateAuthorClickHandle}
						/>
					</div>
					<div className={s.addDurationBlock}>
						<Title titleText='Duration' />
						<Input
							labelTxt='Duration'
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
					<div className={s.authorListBlock}>
						<Title titleText='Authors' />
						{authors.length && (
							<ul className={s.authorsList}>
								{authors.map((author) => {
									return (
										<li key={author.id} className={s.authorListItem}>
											{author.name}
											<Button
												id={author.id}
												btnText='Add author'
												onClick={onAddAuthorClickHandle}
											/>
										</li>
									);
								})}
							</ul>
						)}
					</div>
					<div className={s.courseAuthorsBlock}>
						<Title titleText='Course authors' />
						{/* {selectedAuthors.length ? getAuthorsMarkUp(selectedAuthors) : 'Author list is empty'} */}
					</div>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
