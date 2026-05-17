/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#1A2333',
        primary: '#C8A25D',
        secondary: '#4A5568',
        danger: '#E53E3E',
        success: '#38A169',
        text: '#E2E8F0',
      },
    },
  },
  plugins: [],
}
