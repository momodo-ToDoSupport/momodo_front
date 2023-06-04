/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main-color': '#F0C23A',
      'disabled-color': '#87712D',
      'bg-main': ['#F0C23A'],
      'bg-disabled': '#87712D',
    },
    extend: {},
  },
  plugins: [],
};
