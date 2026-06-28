/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'health-green': '#10B981',
        'health-light': '#D1FAE5',
        'health-dark': '#047857',
        'slate': '#1F2937',
        'light-gray': '#F3F4F6',
      },
      backgroundImage: {
        'gradient-health': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-light': 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
