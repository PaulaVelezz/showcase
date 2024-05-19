/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'ojuju': ['Ojuju', 'sans-serif'],
        'T1Korium': ['T1Korium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

