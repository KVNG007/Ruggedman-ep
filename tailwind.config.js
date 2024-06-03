/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: '#8A9099',
        accent: '#00423A',
        mild_green: '#00D59B',
        light_green: '#005248',
        rare_green: '#017A591A',

        secondary: '#1D1D1F',
        company_red: '#EB7070',
        brand_yellow: '#F8B343',
        primary: '#F5F5F7',
        primary_info: '#5094FF'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        nunito: ["Nunito Sans", 'sans-serif'],
        roboto: ["Roboto", 'sans-serif'],
      },
      boxShadow: {
        '4xl': '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
        'special': '0px 4px 16px 0px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '650': '600ms',
      }
    },
  },
  plugins: [],
}

