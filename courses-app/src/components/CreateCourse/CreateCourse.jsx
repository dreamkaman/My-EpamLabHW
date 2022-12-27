import { useState, useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';

import Button from 'common/Button';
import Input from 'common/Input';
import Title from 'common/Title';
import SelectedAuthorsList from './components/SelectedAuthorsList';
import { Context } from 'Context';

import { durationTransform } from 'helpers/pipeDuration';
import { getAuthorsIdArray } from 'helpers/authorsString';

import s from './CreateCourse.module.css';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [authorName, setAuthorName] = useState(''); //state for the new author name input
	const [duration, setDuration] = useState('');
	const [description, setDescription] = useState('');
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
		context.setAuthors([...context.authors, ...selectedAuthors]);
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();

		if (
			title.length < 2 ||
			description.length < 2 ||
			!Number(duration) ||
			!selectedAuthors.length
		) {
			alert('Please, fill in all fields');
			return;
		}

		const id = uuidV4();
		const creationDate = new Date().toISOString();

		const authors = getAuthorsIdArray(selectedAuthors);

		context.setCourses((prev) => [
			...prev,
			{
				id,
				title,
				description,
				creationDate,
				duration,
				authors,
			},
		]);

		context.setShowCourses(true);
		context.setAuthors([...context.authors, ...selectedAuthors]);
	};

	const onCreateAuthorClickHandle = () => {
		if (authorName && authorName.length > 1) {
			const id = uuidV4();
			context.setAuthors((prev) => [...prev, { id, name: authorName }]);
			setAuthorName('');
			return;
		}
		alert('Please, enter correct author name');
	};

	const onAddAuthorClickHandle = (e) => {
		const selectedAuthor = context.authors.find(
			(author) => author.id === e.target.id
		);

		setSelectedAuthors((prev) => [selectedAuthor, ...prev]);

		const restAuthors = context.authors.filter(
			(author) => author.id !== e.target.id
		);
		context.setAuthors(restAuthors);
	};

	const onDeleteAuthorClickHandle = (e) => {
		const deletedAuthorId = e.target.id;
		const deletedAuthor = selectedAuthors.find(
			(author) => author.id === e.target.id
		);
		setSelectedAuthors((prev) => {
			const newState = prev.filter((author) => author.id !== deletedAuthorId);
			return newState;
		});
		context.setAuthors((prev) => [...prev, { ...deletedAuthor }]);
	};

	const onChangeDescriptionHandle = (e) => {
		setDescription(e.target.value);
	};

	return (
		<form className={s.createCourseForm} onSubmit={onSubmitHandle}>
			<div className={s.courseHeader}>
				<Input
					labelTxt='Title'
					name='title'
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
					onChange={onChangeDescriptionHandle}
					value={description}
				></textarea>
			</div>
			<div className={s.courseProperties}>
				<div className={s.leftSide}>
					<div className={s.addAuthorBlock}>
						<Title titleText='Add author' />
						<Input
							name='authorname'
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
							name='duration'
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
						{!!context.authors.length && (
							<ul className={s.authorsList}>
								{context.authors.map((author) => {
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
						{selectedAuthors.length ? (
							<SelectedAuthorsList
								selectedAuthors={selectedAuthors}
								onClick={onDeleteAuthorClickHandle}
							/>
						) : (
							<p style={{ fontWeight: '500' }}>Author list is empty</p>
						)}
					</div>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
