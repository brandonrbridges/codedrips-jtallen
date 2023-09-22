// Types
import type { Metadata } from 'next'

// Fonts
import { Poppins } from 'next/font/google'
const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['300'],
})

// Styles
import '@/styles/main.scss'

// Components
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

// Packages
import classNames from 'classnames'

export const metadata: Metadata = {
	title: 'JT Allen',
	description: 'Real Estate',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={classNames(poppins.className)}>
				<Navigation />
				{children}
				<Footer />

				<div id='portal' />
			</body>
		</html>
	)
}
