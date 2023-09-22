// Components
import HomeImageLink from '@/components/HomeImageLink'
import HomeJumbotron from '@/components/HomeJumbotron'

// Assets
import interior from '@/assets/images/modern_interior.png'
import exterior from '@/assets/images/modern_exterior.png'
import team from '@/assets/images/team_header.png'

export default function Home() {
	return (
		<main>
			<HomeJumbotron />
			<HomeImageLink text='For Sale' href='/buy' image={exterior} />
			<HomeImageLink text='Meet the Team' href='/team' image={team} />
			<HomeImageLink text='For Rent' href='/rent' image={interior} />
		</main>
	)
}
