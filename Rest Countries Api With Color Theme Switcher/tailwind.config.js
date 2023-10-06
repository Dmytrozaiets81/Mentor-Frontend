/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				fem: {
					primary: "#202C36",
					primaryLight: "#2B3844",
					lightBlack: "#111517",
					grayWhite: "#FAFAFA",
				},
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
			screens: {
				sm: "375px",
				//1440px
				lg: "1024px",
			},
		},
	},
	plugins: [],
}
