/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green-user': '#003241',
        'black-03':'#424242',
        'light': '#e9e9e9'
      }
    },
  },
  plugins: [],
}

