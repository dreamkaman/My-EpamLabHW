import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { Context } from './Context';

import * as db from 'helpers/mockedDataBase';

const initialCoursesSet = db.mockedCoursesList;

const App = () => {
	const [isLoggined, setIsLoggined] = useState(false);
	const [courses, setCourses] = useState(initialCoursesSet);
	const [filter, setFilter] = useState('');

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
				value={{ isLoggined, onClickHandle, filter, setFilter, setCourses }}
			>
				<Header />
				<Courses courses={courses} />
			</Context.Provider>
		</>
	);
};

export default App;
