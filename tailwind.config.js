/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#F5F5F5',
        'nav-text': '#1A1A1A',
        'nav-text-secondary': '#6B7280',
        'search-bg': '#E5E7EB',
      },
    },
  },
  plugins: [],
}

