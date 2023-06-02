/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main-color': '#EBE78E',
      'disabled-color': '#87712D',
      'bg-main': ['#EBE78E'],
      'bg-disabled': '#87712D',
    },
    extend: {},
  },
  plugins: [],
};
