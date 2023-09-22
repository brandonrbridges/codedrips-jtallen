import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex flex-col items-center justify-center grow'>
			<h1 className='text-4xl'>404</h1>
			<h2 className='mb-4 text-xl'>Page Not Found</h2>

			<Link href='/'>Go Home</Link>
		</main>
	)
}
