/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('public/Images/Home.jpg')",
        'about': "url('public/Images/About.jpg')"
      }

    },
  },
  plugins: [],
}

