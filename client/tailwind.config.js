/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#dbddea',
          100: '#7278AC',
          200: '#444A74'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
