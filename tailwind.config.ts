/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"aboutus-main": "url('/backgrounds/about-bg.png')",
				"contactus-main": "url('/backgrounds/contact-bg.png')",
			},
			colors: {
				"303F9A": "#303F9A",
				"7088C6": "#7088C6",
				"2A6FA6": "#2A6FA6",
				"41ABC3": "#41ABC3",
				B2CFD7: "#B2CFD7",
				D9D9D9: "#D9D9D9",
			},
			boxShadow: {
				"right-shift": "8px 8px 20px -1px rgba(0,0,0,0.5)",
			},
		},
	},

	plugins: [],
};
