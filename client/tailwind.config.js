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
          50: '#F2F3F7',
          100: '#7278AC',
          200: '#444A74'
        }
      },
      screens: {
        'l': '980px',
        'xs': '540px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
