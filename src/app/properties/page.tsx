import ContentBlock from '@/components/ContentBlock'
import PropertiesJumbotron from '@/components/PropertiesJumbotron'
import PropertyList from '@/components/PropertyList'
import TestimonialBlock from '@/components/TestimonialBlock'

export default function Properties() {
	return (
		<main>
			<PropertiesJumbotron />
			<ContentBlock />
			<TestimonialBlock />
			<PropertyList />
		</main>
	)
}
