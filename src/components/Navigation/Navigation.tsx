// Types
import type { TLink } from './Navigation.types'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import style from './Navigation.module.scss'

// Client Components
import { MobileNavigation } from './Navigation.client'

// Assets
import logo from '@/assets/brand/logo.svg'

const Navigation = () => {
	const links: TLink[] = [
		{
			href: '/about',
			title: 'About',
			side: 'left',
		},
		{
			href: '/media',
			title: 'Media',
			side: 'left',
		},
		{
			href: '/properties?type=sell',
			title: 'Sell',
			side: 'left',
		},
		{
			href: '/properties?type=buy',
			title: 'Buy',
			side: 'right',
		},
		{
			href: '/properties?type=rent',
			title: 'Rent',
			side: 'right',
		},
		{
			href: '/contact',

			title: 'Contact',
			side: 'right',
		},
	]

	return (
		<div className='absolute top-0 left-0 z-50 w-full px-12 py-6'>
			<div className='grid grid-cols-3 font-poppins'>
				<div className='flex items-center justify-start space-x-[60px]'>
					{links
						.filter(({ side }) => side === 'left')
						.map(({ href, title }) => (
							<Link key={href} href={href} title={title} className={style.link}>
								{title}
							</Link>
						))}
				</div>
				<div className='flex items-center justify-center'>
					<Link href='/' title='Home' className='z-40'>
						<Image
							src={logo}
							alt='JT Allen Logo'
							height={40}
							width={200}
							className='z-40 cursor-pointer'
						/>
					</Link>
				</div>
				<div className='flex items-center justify-end space-x-[60px]'>
					{links
						.filter(({ side }) => side === 'right')
						.map(({ href, title }) => (
							<Link key={href} href={href} title={title} className={style.link}>
								{title}
							</Link>
						))}

					<MobileNavigation links={links} />
				</div>
			</div>
		</div>
	)
}

export default Navigation
