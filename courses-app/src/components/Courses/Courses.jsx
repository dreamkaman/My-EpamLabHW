import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button';
import SearchBar from './components/SearchBar';

import { getAuthors } from 'helpers/authorsString';
import { dateTransform } from 'helpers/dateGenerator';
import { durationTransform } from 'helpers/pipeDuration';

import s from './Courses.module.css';

const Courses = ({ courses = [] }) => {
	return (
		<section className={s.coursesSection}>
			<div className={s.wrapper}>
				<SearchBar />
				<Button btnText='Add new course' />
			</div>
			<ul>
				{courses.map((course) => {
					return (
						<CourseCard
							key={course.id}
							title={course.title}
							description={course.description}
							authors={getAuthors(course.authors)}
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
