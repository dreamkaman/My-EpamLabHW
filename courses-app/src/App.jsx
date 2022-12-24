import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { Context } from './Context';

import * as db from 'helpers/mockedDataBase';

const App = () => {
	const [isLoggined, setIsLoggined] = useState(false);

	const onClickHandle = (value) => {
		setIsLoggined(value);
	};
	return (
		<>
			<Context.Provider value={{ isLoggined, onClickHandle }}>
				<Header />
			</Context.Provider>

			<Courses courses={db.mockedCoursesList} />
		</>
	);
};

export default App;
