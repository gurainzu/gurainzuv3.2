/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'valetta': "Valetta Man",
        'nevermine' : "nevermine",
        'monomaniac':"'Monomaniac One', sans-serif;",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}