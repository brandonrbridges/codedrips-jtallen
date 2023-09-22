// Assets
import img from '@/assets/images/modern_exterior.png'
import Image from 'next/image'

const PropertiesJumbotron = () => {
	return (
		<div className='relative h-[80vh]'>
			<Image
				src={img}
				alt='Bridge'
				fill
				className='object-cover pointer-events-none'
			/>

			<h1 className='absolute font-serif text-4xl text-center text-white -translate-x-1/2 left-1/2 bottom-8'>
				Property goals made <i>real</i>.
			</h1>
		</div>
	)
}

export default PropertiesJumbotron
