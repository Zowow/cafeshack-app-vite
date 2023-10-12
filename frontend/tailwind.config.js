/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F35C47',
        'secondary': '#FF8C4C',
        'complimentary-1': '#FFC082',
        'complimentary-2': '#FFF4DE',
      },
    },
  },
  plugins: [],
}

