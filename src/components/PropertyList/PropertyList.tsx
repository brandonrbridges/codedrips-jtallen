// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import balcony from '@/assets/images/balcony.png'
import jtIcon from '@/assets/brand/icon.svg'

// Packages
import classNames from 'classnames'

const PropertyList = () => {
	return (
		<div className='px-10 py-20 md:px-20'>
			<PropertyItem featured />

			<div className='grid grid-cols-1 gap-8 my-20 md:grid-cols-2 lg:grid-cols-3'>
				<PropertyItem />
				<PropertyItem />
				<PropertyItem />
				<PropertyItem />
				<PropertyItem sold />
			</div>

			<button className='flex flex-col items-center justify-center mx-auto space-y-4'>
				<Image src={jtIcon} alt='Load More' width={32} height={32} />
				<p>Load More</p>
			</button>
		</div>
	)
}

type PropertyItemProps = {
	featured?: boolean
	sold?: boolean
}

const PropertyItem = (props: PropertyItemProps) => {
	return (
		<Link
			href='/properties'
			title='#SEO'
			className='transition-all group hover:-translate-y-1 hover:shadow-xl shadow-primary'
		>
			<div className='border-b border-white text-primary'>
				<div
					className={classNames(
						'relative border border-white rounded-sm  bg-black/10',
						{
							'h-96': props.featured,
							'h-72': !props.featured,
						}
					)}
				>
					<Image src={balcony} alt='#SEO' fill className='object-cover' />
					{props.sold && (
						<div className='absolute z-10 flex items-center justify-center w-20 h-20 rounded-full bg-primary left-4 bottom-4'>
							<p className='font-serif text-xl text-white'>SOLD</p>
						</div>
					)}
				</div>
				<div
					className={classNames('py-8 transition-all group-hover:bg-white', {
						'px-6': props.featured,
						'px-2': !props.featured,
					})}
				>
					<div className='flex items-end justify-between'>
						<p className='font-serif text-lg font-medium'>Woollahra</p>
						<p>2 bed &nbsp; 3 Bath &nbsp; 1 Car</p>
					</div>
					<div className='flex items-center justify-between'>
						<p>27/67 Ocean Street</p>
						<p>Auction - Contact Agent</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PropertyList
