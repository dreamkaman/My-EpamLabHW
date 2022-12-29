import { useContext } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button';
import SearchBar from './components/SearchBar';
import { Context } from 'Context';

import { convertAuthorsIdToNames } from 'helpers/authorsString';
import { dateTransform } from 'helpers/dateGenerator';
import { durationTransform } from 'helpers/pipeDuration';

import s from './Courses.module.css';

const Courses = () => {
	const context = useContext(Context);

	const onAddNewCourseClick = () => {
		context.setShowCourses(false);
	};

	return (
		<section className={s.coursesSection}>
			<div className={s.wrapper}>
				<SearchBar value={context.filter} setFilter={context.setFilter} />
				<Button btnText='Add new course' onClick={onAddNewCourseClick} />
			</div>
			<ul>
				{context.courses.map((course) => {
					console.log(course);
					return (
						<CourseCard
							key={course.id}
							title={course.title}
							description={course.description}
							authorsName={convertAuthorsIdToNames(
								course.authors,
								context.authors
							)}
							duration={durationTransform(course.duration)}
							created={dateTransform(course.creationDate)}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Courses;
