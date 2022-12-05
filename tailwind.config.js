/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: { 'background': "url('/pos.jpg')" }
      },
  },
  },
  plugins: [],
}