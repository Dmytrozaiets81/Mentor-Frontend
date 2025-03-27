/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				fem: {
					gold: "#D5966C",
					almostBlack: "#151515",
					darkGrey: "#444444",
				},
			},
			fontFamily: {
				sans: ["Outfit"],
				heading: ["Big Shoulders Display"],
			},
			fontSize: {
				title: ["52px", "62px"],
				body: ["18px", "28px"],
			},
			screens: {
				sm: "375px",
				md: "768px",
				// 1440px
				lg: "1024px",
			},
		},
	},
	plugins: [],
}
