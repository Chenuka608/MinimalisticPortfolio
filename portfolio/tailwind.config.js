/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode by using a class (this is important)
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans font
      },
      fontWeight: {
        light: 300, // Set light weight for Inter
      },
      colors: {
        // Optional: You can extend dark mode colors if needed
        // Example:
        // 'dark-bg': '#121212', // Just an example to extend colors
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideRight: 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
