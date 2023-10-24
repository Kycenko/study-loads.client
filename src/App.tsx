import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import SubjectsPage from './pages/subjects/SubjectsPage';
import { store } from './store/store';
import AcademicDegreesPage from './pages/academicDegrees/AcademicDegreesPage';
import GroupsPage from './pages/groups/GroupsPage';
import TeachersPage from './pages/teachers/TeachersPage';
import SpecialitiesPage from './pages/specialities/SpecialitiesPage';
import StudyLoadsPage from './pages/studyLoads/StudyLoadsPage';
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/subjects' element={<SubjectsPage />} />
					<Route path='/academic-degrees' element={<AcademicDegreesPage />} />
					<Route path='/groups' element={<GroupsPage />} />
					<Route path='/teachers' element={<TeachersPage />} />
					<Route path='/specialities' element={<SpecialitiesPage />} />
					<Route path='/study-loads' element={<StudyLoadsPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
