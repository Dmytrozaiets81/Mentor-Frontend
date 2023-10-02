/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					cyan: "#2BD0D0",
					lightCyan: "#24b5bd",
					lightestCyan: "#198a9c",
					darkViolet: "#3A3054",
					red: "#F46363",
				},
				neutral: {
					gray: "#BFBFBF",
					lightGray: "#EFF1F7",
					grayishViolet: "#9E9AA8",
					darkestBlue: "#34313D",
					darkestViolet: "#232127",
				},
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			screens: {
				sm: "375px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
}
