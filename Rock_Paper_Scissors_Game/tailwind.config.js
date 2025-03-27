/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				fem: {
					dark: "#3B4262",
					darkest: "#565468",
					score: "#2A46C0",
					header: "#606E85",
				},
			},
			fontFamily: {
				sans: ["Barlow Semi Condensed", "sans-serif"],
			},
			screens: {
				sm: "375px",
				lg: "1366px",
			},
		},
	},
	plugins: [],
}
