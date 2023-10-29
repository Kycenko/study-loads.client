import Layout from '../../components/Layout/Layout'
import { CustomSearch } from '../../components/UI/CustomSearch'
import { CustomSelect } from '../../components/UI/CustomSelect'

import StudyLoadsTable from './StudyLoadsTable'

const StudyLoadsPage = () => {
	return (
		<>
			<Layout>
				<div className='flex p-5 justify-between'>
					<CustomSearch />
					<CustomSelect />
				</div>

				<StudyLoadsTable />
			</Layout>
		</>
	)
}

export default StudyLoadsPage
