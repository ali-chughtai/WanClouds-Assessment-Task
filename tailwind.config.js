/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter: ['Inter']
      },
      colors:{
        brownStartGradient: "#5F2B38",
      }
    },
  },
  plugins: [],
}

