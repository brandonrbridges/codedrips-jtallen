// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import buyImage from '@/assets/images/imgnav_buy.png'
import rentImage from '@/assets/images/imgnav_rent.png'
import sellImage from '@/assets/images/imgnav_sell.png'
import peopleImage from '@/assets/images/imgnav_people.png'
import mediaImage from '@/assets/images/imgnav_media.png'
import contactImage from '@/assets/images/imgnav_contact.png'
import classNames from 'classnames'

const ImageNavigation = () => {
	const links = [
		{
			href: '/properties?type=buy',
			title: 'Buy',
			image: buyImage,
		},
		{
			href: '/properties?type=rent',
			title: 'Rent',
			image: rentImage,
		},
		{
			href: '/properties?type=sell',
			title: 'Sell',
			image: sellImage,
		},
		{
			href: '/about',
			title: 'Our People',
			image: peopleImage,
		},
		{
			href: '/media',
			title: 'Media',
			image: mediaImage,
		},
		{
			href: '/contact',
			title: 'Contact',
			image: contactImage,
		},
	]

	return (
		<div>
			<div className='grid grid-cols-6'>
				{links.map(({ href, title, image }, index) => (
					<Link
						href={href}
						title={title}
						key={href}
						className='transition-transform group hover:-translate-y-6'
					>
						<div className='relative overflow-hidden h-96 group-hover:rounded-t-sm'>
							<Image src={image} alt={title} fill className='object-cover' />
							<div
								className={classNames(
									'absolute bottom-0 w-full py-4 text-center transition-colors bg-white group-hover:bg-secondary',
									{
										'border-r group-hover:border-0': index !== links.length - 1,
									}
								)}
							>
								<p className='group-hover:text-white'>{title}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default ImageNavigation
