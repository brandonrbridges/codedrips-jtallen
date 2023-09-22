import ContentBlock from '@/components/ContentBlock'
import ImageNavigation from '@/components/ImageNavigation'
import Jumbotron from '@/components/Jumbotron'
import TeamBlock from '@/components/TeamBlock'
import TestimonialBlock from '@/components/TestimonialBlock'

export default function About() {
	return (
		<main>
			<Jumbotron height='h-[80vh]' />
			<ContentBlock />
			<TeamBlock />
			<TestimonialBlock />

			<div className='px-10 py-40 md:px-20'>
				<p className='w-full mx-auto font-serif text-lg text-center md:w-2/3'>
					Our knowledge and know-how give us the edge in forming long-lasting
					and successful property partnerships. People is who we are. Property
					is what we do.
				</p>
				<p className='my-8 mb-4 font-serif text-lg text-center'>
					Allow us to transform your Real Estate experience.
				</p>
				<p className='font-serif text-xl text-center'>
					<a href='tel:02 9362 8507'>Call us today 02 9362 8507.</a>
				</p>
			</div>

			<ImageNavigation />
		</main>
	)
}
