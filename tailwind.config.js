/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				primary: "#3a53e4",
				"primary-dark": "darken(#3a53e4, 30%)",
				secondary: "#fa2945",
				"secondary-dark": "darken(#fa2945, 30%)",
				light: "#f5f5f8",
				mid: "#dde0e7",
				dark: "#29292b",
			},
		},
	},
	plugins: [],
}
