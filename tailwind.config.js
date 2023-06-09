/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxs: '9px',
    },
    colors: {
      'main-color': '#F0C23A',
      'disabled-color': '#87712D',
      'bg-color': '#1f1f1f',
      'bg-main': ['#F0C23A'],
      'bg-disabled': '#87712D',
    },
    extend: {},
  },
  plugins: [],
};
