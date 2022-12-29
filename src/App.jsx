import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { Context } from './Context';

import * as db from 'helpers/mockedDataBase';
import CreateCourse from 'components/CreateCourse';

const initialCoursesSet = db.mockedCoursesList;
const authorsInitial = db.mockedAuthorsList;

const App = () => {
	const [isLoggined, setIsLoggined] = useState(false);
	const [courses, setCourses] = useState(initialCoursesSet);
	const [filter, setFilter] = useState('');
	const [showCourses, setShowCourses] = useState(true);
	const [authors, setAuthors] = useState(authorsInitial);

	useEffect(() => {
		if (!filter) {
			setCourses(initialCoursesSet);
		}
	}, [filter]);

	const onClickHandle = (value) => {
		setIsLoggined(value);
	};
	return (
		<>
			<Context.Provider
				value={{
					isLoggined,
					onClickHandle,
					filter,
					setFilter,
					courses,
					setCourses,
					setShowCourses,
					authors,
					setAuthors,
				}}
			>
				<Header />
				{showCourses && <Courses />}
				{!showCourses && <CreateCourse />}
			</Context.Provider>
		</>
	);
};

export default App;
