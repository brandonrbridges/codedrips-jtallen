// Next
import Image from 'next/image'

// Assets
import img from '@/assets/images/home_bridge.png'

const HomeJumbotron = () => {
	return (
		<div className='relative w-full h-screen'>
			<Image
				src={img}
				alt='Bridge'
				fill
				className='object-cover pointer-events-none'
			/>
		</div>
	)
}

export default HomeJumbotron
