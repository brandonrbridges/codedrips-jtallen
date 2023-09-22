// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import style from './Footer.module.scss'

// Assets
import Logo from '@/assets/brand/logo.svg'

// Icons
import {
	IconBrandLinkedin,
	IconBrandInstagram,
	IconArrowNarrowRight,
} from '@tabler/icons-react'

const Footer = () => {
	return (
		<div className='w-full p-12 pt-20 text-white bg-primary'>
			<div className='flex items-center justify-between mb-20'>
				<div>
					<Link href='/'>
						<Image
							src={Logo}
							alt='JT Allen Logo'
							height={40}
							width={200}
							className='cursor-pointer'
						/>
					</Link>
				</div>
				<div className='flex items-center space-x-4'>
					<a href='' title='LinkedIn'>
						<IconBrandLinkedin stroke={1} size={32} />
					</a>
					<a href='' title='Instagram'>
						<IconBrandInstagram stroke={1} size={32} />
					</a>
				</div>
			</div>
			<div className='grid grid-cols-3 gap-8'>
				<div className='flex flex-col'>
					<p className='mb-2'>
						<a href='tel:02 9362 8507' title='Call Us'>
							Phone. 02 9362 8507
						</a>
					</p>
					<p>
						418 New South Head Rd,
						<br />
						Double Bay, 2028
					</p>

					<p className='mt-auto text-sm'>
						&copy; Copyright {new Date().getFullYear()} JT Allen Real Estate All
						rights reserved.
					</p>
				</div>
				<div>
					<div className='grid grid-cols-3 mb-8'>
						<div className={style.links}>
							<Link href='/about' title='About'>
								About
							</Link>
							<Link href='/media' title='Media'>
								Media
							</Link>
							<Link href='/sold' title='Sold'>
								Sold
							</Link>
						</div>
						<div className={style.links}>
							<Link href='/buy' title='Buy'>
								Buy
							</Link>
							<Link href='/rent' title='Rent'>
								Rent
							</Link>
							<Link href='/contact' title='Contact'>
								Contact
							</Link>
						</div>
						<div className={style.links}>
							<Link
								href='/upcoming-inspections'
								title='Upcoming Inspections'
								className='whitespace-nowrap'
							>
								Upcoming Inspections
							</Link>

							<Link
								href='/upcoming-auctions'
								title='Upcoming Auctions'
								className='whitespace-nowrap'
							>
								Upcoming Auctions
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-3 text-sm'>
						<Link href='/privacy-policy' title='Privacy Policy'>
							Privacy Policy
						</Link>
						<Link
							href='/terms-and-conditions'
							title='Terms and Conditions'
							className='whitespace-nowrap'
						>
							Terms and Conditions
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-end'>
					<button className='flex items-center px-8 py-4 space-x-6 transition-colors border border-white/50 hover:border-white'>
						<span>Subscribe to our Newsletter</span>
						<IconArrowNarrowRight />
					</button>

					<p className='mt-auto text-sm'>Website by LBD STUDIOS</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
