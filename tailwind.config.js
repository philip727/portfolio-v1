/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sp': '200px',
      'mp': '350px',
      'bp': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2xl-offset': '1550px',
      '3xl': '1720px',
    },
    extend: {},
  },
  plugins: [],
}
