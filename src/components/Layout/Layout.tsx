import { SideBar } from './SideBar'

type Props = {
	children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
	return (
		<div className='flex h-screen'>
			<SideBar />
			<div className='flex-1 border flex-col'>
				<div className='flex-1 overflow-auto'>{children}</div>
			</div>
		</div>
	)
}

export default Layout
