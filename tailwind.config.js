/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient-back':'#0000001a',
      },
      backgroundImage: {
        'form-back1': "url('/src/assets/1.jpg')",
        'form-back2': "url('/src/assets/2.jpg')",
        'form-back3': "url('/src/assets/3.jpg')",
      }
    },
  },
  plugins: [],
}

