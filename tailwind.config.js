/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        hitam: '#252525',
      }
    },
  },
  plugins: [require("daisyui")],
}

