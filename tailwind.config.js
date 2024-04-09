/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        '3xl': '0 3px 4px rgba(141, 141, 141,1)',
      }
    },
  },
  plugins: [],
}

