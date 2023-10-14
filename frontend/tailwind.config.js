/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A1CCD1',
        'secondary': '#F4F2DE',
        'complimentary-1': '#E9B384',
        'complimentary-2': '#7C9D96',
      },
      boxShadow: {
        'custom': '4px 4px 4px 0px rgba(0, 0, 0, 0.25);'
      }
    },
  },
  plugins: [],
}

