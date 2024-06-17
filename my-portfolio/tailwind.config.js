/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '17vh': '17vh',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add your custom media class name here
        'custom-media-class': '900px',
      },

      
    },
  },


  plugins: [],
}