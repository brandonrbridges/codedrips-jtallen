// Next
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

type HomeImageLinkProps = {
	text: string
	href: string
	image: StaticImageData
}

const HomeImageLink = (props: HomeImageLinkProps) => {
	return (
		<Link href={props.href} title={props.text}>
			<div className='relative w-full h-screen'>
				<Image
					src={props.image}
					alt='#SEO'
					fill
					className='object-cover -z-10'
				/>
				<p className='absolute font-serif text-4xl text-white bottom-12 left-12'>
					{props.text}
				</p>
			</div>
		</Link>
	)
}

export default HomeImageLink
