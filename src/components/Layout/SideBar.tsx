import React, { SetStateAction } from 'react'
import {
	Card,
	Typography,
	List,
	ListItem,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function SideBar() {
	const [open, setOpen] = React.useState(0)

	const handleOpen = (value: SetStateAction<number>) => {
		setOpen(open === value ? 0 : value)
	}

	return (
		<Card className='h-screen w-full max-w-[250px] p-4 shadow-xl shadow-blue-gray-900/5'>
			<div className='mb-2 p-4'>
				<Typography variant='h5' color='blue-gray'>
					База данных
				</Typography>
			</div>
			<List>
				<Link to='/'>
					<ListItem>Нагрузка</ListItem>
				</Link>

				<Accordion
					open={open === 1}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open === 1 ? 'rotate-180' : ''
							}`}
						/>
					}
				>
					<ListItem className='p-0' selected={open === 1}>
						<AccordionHeader
							onClick={() => handleOpen(1)}
							className='border-b-0 p-3'
						>
							<Typography color='blue-gray' className='mr-auto font-normal'>
								Другие таблицы
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className='py-1'>
						<List className='p-0'>
							<ListItem>Группы</ListItem>
							<Link to='/subjects'>
								<ListItem>Предметы</ListItem>
							</Link>
							<ListItem>Преподаватели</ListItem>
							<ListItem>Ученая степень</ListItem>
							<ListItem>Специальность</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
			</List>
		</Card>
	)
}
