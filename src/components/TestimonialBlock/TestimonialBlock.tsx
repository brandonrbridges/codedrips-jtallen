import { IconCircle, IconCircleFilled } from '@tabler/icons-react'

const TestimonialBlock = () => {
	return (
		<div className='px-10 py-20 md:px-36 bg-primary'>
			<div className='grid grid-cols-1 gap-20 md:grid-cols-2'>
				<div className='flex flex-col justify-center'>
					<p className='mb-4'>
						“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.”
					</p>

					<p>Tim Langmore</p>

					<div className='flex items-center mt-8 space-x-2'>
						<IconCircleFilled size={16} stroke={1} />
						<IconCircle size={16} stroke={1} />
						<IconCircle size={16} stroke={1} />
						<IconCircle size={16} stroke={1} />
					</div>
				</div>
				<div className='w-full h-96 bg-white/25'></div>
			</div>
		</div>
	)
}

export default TestimonialBlock
