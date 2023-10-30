import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import StudyLoadsPage from './pages/studyLoads/StudyLoadsPage';
import SubjectsPage from './pages/subjects/SubjectsPage';
import PieChartPage from './Diagrams/subjects/PieChartPage';
import VerticlalBarDiagramPage from './Diagrams/subjects/VerticlalBarDiagramPage';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StudyLoadsPage />} />

					<Route path='/subjects' element={<SubjectsPage />} />
					<Route path='/subjects-circle-diagram' element={<PieChartPage />} />
					<Route
						path='/subjects-vertical-diagram'
						element={<VerticlalBarDiagramPage />}
					/>
					{/* <Route path='/academic-degrees' element={<AcademicDegreesPage />} />
					<Route path='/groups' element={<GroupsPage />} />
					<Route path='/teachers' element={<TeachersPage />} />
					<Route path='/specialities' element={<SpecialitiesPage />} /> */}
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
