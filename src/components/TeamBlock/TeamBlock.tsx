'use client'

// React
import { useState } from 'react'
import { createPortal } from 'react-dom'

// Next
import Image, { type StaticImageData } from 'next/image'

// Assets
import img from '@/assets/images/team_member.png'

// Icons
import { IconDeviceMobile, IconX } from '@tabler/icons-react'

type Employee = {
	name: string
	title: string
	description: string
	image: StaticImageData
}

const TeamBlock = () => {
	const [active, setActive] = useState<Employee | undefined>()

	const handleClick = (person: Employee) => setActive(person)
	const handleClose = () => setActive(undefined)

	const team = [
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
		{
			name: 'John Doe',
			title: 'CEO',
			image: img,
			description:
				'Joining JT Allen in 2022 as Executive Assistant to Joshua Allen, Natalie brings a wealth of administrative experience from more than 22 years working in admin, with over 17 of those being in the real estate industry. She is an integral part of the JT Allen team, the glue that keeps it all together, ensuring everything runs smoothly for everyone.Her exceptional attention to detail, ability to work under pressure and depth of knowledge and experience provide the support needed with ease and efficiency, which ultimately translates as first-class service delivered by JT Allen. Her role encompasses a plethora of functions that form the foundations of respected service with integrity.',
		},
	]

	return (
		<>
			{JSON.stringify(active)}
			<div className='px-10 py-20 md:px-20'>
				<div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6'>
					{team.map((person, index) => (
						<TeamMember key={index} {...person} onClick={handleClick} />
					))}
				</div>
			</div>

			{active && <TeamMemberZoom onClose={handleClose} {...active} />}
		</>
	)
}

type TeamMember = Employee & {
	onClick: (person: Employee) => void
}

const TeamMember = (props: TeamMember) => {
	const handleClick = () => props.onClick(props)

	return (
		<button onClick={handleClick}>
			<div className='relative w-full h-64 overflow-hidden rounded-sm bg-black/10 group'>
				<Image
					src={props.image}
					alt={props.name}
					fill
					className='object-cover'
				/>

				<div className='absolute top-0 left-0 flex flex-col items-start justify-end w-full h-full p-4 text-white transition-all opacity-0 group-hover:opacity-100 bg-primary/75'>
					<p className='font-serif'>{props.name}</p>
					<p>{props.title}</p>
				</div>
			</div>
		</button>
	)
}

type TeamMemberZoom = Employee & {
	onClose: () => void
}

const TeamMemberZoom = (props: TeamMemberZoom) => {
	const handleClose = () => props.onClose()

	return createPortal(
		<div className='fixed top-0 left-0 z-50 w-full h-screen bg-primary/75'>
			<button onClick={handleClose} className='absolute top-10 right-20'>
				<IconX />
			</button>
			<div className='grid grid-cols-5 h-[60vh]'>
				<div className='col-span-2'>
					<div className='relative w-full h-full overflow-hidden'>
						<Image
							src={props.image}
							alt={props.name}
							fill
							className='object-cover'
						/>
					</div>
				</div>
				<div className='col-span-3'>
					<div className='w-full h-full p-20 bg-white'>
						<p className='font-serif text-2xl'>{props.name}</p>
						<p>{props.title}</p>
						<p className='my-8'>{props.description}</p>

						<div className='flex items-center space-x-8'>
							<button className='px-6 py-2 border rounded-sm border-primary'>
								Email {props.name.split(' ')[0]}
							</button>
							<a className='flex items-center space-x-2'>
								<IconDeviceMobile stroke={0.75} size={32} />
								<span>0404 184 158</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('portal') as HTMLElement
	)
}

export default TeamBlock
