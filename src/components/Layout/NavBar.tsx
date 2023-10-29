const NavBar = () => {
	return (
		<div>
			<div className='pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0'></div>
			<div className='bg-white'>
				<div className='flex-col flex'>
					<div className='w-full '>
						<div className='bg-white h-16 justify-center items-center mx-auto px-4 flex'>
							{/* <div>
								<img
									src='https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png'
									className='block btn- h-8 w-auto'
									alt=''
								/>
							</div> */}
							<div className='relative'>
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
									placeholder='Поиск...'
									className='w-full py-2 pl-10 text-sm rounded-md border border-gray-300 focus:outline-none'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
