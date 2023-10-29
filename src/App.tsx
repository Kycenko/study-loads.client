import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store/store'

import StudyLoadsPage from './pages/studyLoads/StudyLoadsPage'
import SubjectsPage from './pages/subjects/SubjectsPage'
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StudyLoadsPage />} />

					<Route path='/subjects' element={<SubjectsPage />} />
					{/* <Route path='/academic-degrees' element={<AcademicDegreesPage />} />
					<Route path='/groups' element={<GroupsPage />} />
					<Route path='/teachers' element={<TeachersPage />} />
					<Route path='/specialities' element={<SpecialitiesPage />} /> */}
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
