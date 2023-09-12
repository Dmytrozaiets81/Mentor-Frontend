/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				title: ["52px", "62px"],
				body: ["18px", "28px"],
			},
			colors: {
				fem: {
					primary: "#54E6AF",
					primaryLight: "#B3FFE2",
					secondary: "#C2CBE5",
					tertiary: "#5A668A",
					neutral: "#2C344B",
					base: "#121725",
					red: "#FB3E3E",
				},
			},
		},
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1440px",
		},
	},
	plugins: [],
};

