/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#dbddea',
          100: '#6974C9',
          200: '#36213E'
        },
        midgreen: {
          50: '#0F5257'
        },
        yellow: {
          50: '#9BCD7A'
        }
      }
    },
  },
  plugins: [],
}
