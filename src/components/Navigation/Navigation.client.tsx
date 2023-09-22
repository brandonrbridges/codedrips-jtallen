'use client'

// Types
import type { TLink } from './Navigation.types'

// React
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Next
import Link from 'next/link'

// Packages
import { motion } from 'framer-motion'

// Icons
import { IconMenu, IconX } from '@tabler/icons-react'

type NavigationProps = {
	links: TLink[]
}

export const MobileNavigation = (props: NavigationProps) => {
	const [open, setOpen] = useState<boolean>(false)

	const toggleMenu = () => setOpen((state) => !state)

	const menuVariants = {
		open: {
			height: '100vh',
			opacity: 1,
			transition: {
				duration: 0.3,
			},
		},
		closed: {
			height: 0,
			opacity: 0,
		},
	}

	const linkContainerVariants = {
		open: {
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}

	const linkVariants = {
		open: {
			y: 0,
			opacity: 1,
		},
		closed: {
			y: -20,
			opacity: 0,
		},
	}

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	return (
		<>
			<button onClick={toggleMenu} className='z-50 text-white md:hidden'>
				{!open ? (
					<IconMenu stroke={1} className='text-white' />
				) : (
					<IconX stroke={1} className='text-white' />
				)}
			</button>

			{open &&
				createPortal(
					<motion.div
						className='absolute top-0 left-0 z-40 w-full p-12 pt-40 bg-primary'
						variants={menuVariants}
						initial='closed'
						animate='open'
					>
						<motion.div
							className='flex flex-col items-center justify-center space-y-8'
							variants={linkContainerVariants}
							initial='closed'
							animate='open'
						>
							{props.links.map(({ href, title }) => (
								<motion.div key={href} variants={linkVariants}>
									<Link
										href={href}
										title={title}
										className='text-lg text-white'
									>
										{title}
									</Link>
								</motion.div>
							))}
						</motion.div>
					</motion.div>,
					document.getElementById('portal') as HTMLElement
				)}
		</>
	)
}
