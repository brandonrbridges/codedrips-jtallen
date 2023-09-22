// Next
import Image from 'next/image'

// Packages
import classNames from 'classnames'

// Assets
import img from '@/assets/images/modern_exterior.png'

type JumbotronProps = {
	height?: string
	text?: React.ReactNode // wrap in empty tag <>{props.text}</> to use
	className?: string
}

const Jumbotron = (props: JumbotronProps) => {
	return (
		<div
			className={classNames(
				'relative',
				props.height ?? 'h-screen',
				props.className
			)}
		>
			<Image
				src={img}
				alt='#SEO'
				fill
				className='object-cover pointer-events-none'
			/>

			{props.text && (
				<h1 className='absolute font-serif text-4xl text-center text-white -translate-x-1/2 left-1/2 bottom-8'>
					{props.text}
				</h1>
			)}
		</div>
	)
}

export default Jumbotron
