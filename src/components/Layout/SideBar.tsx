import { Link } from 'react-router-dom';

const SideBar = () => {
	return (
		<div className='flex'>
			<div className='flex flex-col items-center h-screen p-3 bg-white shadow w-52'>
				<div className='space-y-3'>
					{/* <div className='relative'>
						<span className='absolute inset-y-0 left-0 flex items-center py-4'>
							<button
								type='submit'
								className='p-2 focus:outline-none focus:ring'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</button>
						</span>
						<input
							type='search'
							name='Search'
							placeholder='Search...'
							className='w-full py-2 pl-10 text-sm rounded-md border border-gray-300 focus:outline-none'
						/>
					</div> */}
					<div className='flex-1'>
						<ul className='pt-2 pb-4 space-y-1 text-sm'>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/'
								>
									<span>Главная</span>
								</Link>
							</li>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/academic-degrees'
								>
									<span>Ученая степень</span>
								</Link>
							</li>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/subjects'
								>
									<span>Предметы</span>
								</Link>
							</li>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/teachers'
								>
									<span>Преподаватели</span>
								</Link>
							</li>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/groups'
								>
									<span>Группы</span>
								</Link>
							</li>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/study-loads'
								>
									<span>Нагрузка</span>
								</Link>
							</li>
							<li className='rounded-sm'>
								<Link
									className='flex items-center p-2 space-x-3 rounded-md'
									to='/specialities'
								>
									<span>Специальность</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
