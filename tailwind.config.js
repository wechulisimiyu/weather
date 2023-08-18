/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#344e41',
        secondary: '#588157',
      }
    },
    fontFamily: {
      Nunito: ["Nunito Sans, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "760px",
    },
  },
  plugins: [],
}

