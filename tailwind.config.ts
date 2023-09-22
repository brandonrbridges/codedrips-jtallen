import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#001629',
				},
				secondary: {
					DEFAULT: '#530e2a',
				},
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
			},
		},
	},
	plugins: [],
}

export default config
