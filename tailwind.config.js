/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '820px' },
      xs: { max: '640px' },
      xxs: { max: '370px' },
    },
    colors: {
      background: '#E388AB',
    },
    extend: {},
  },
  plugins: [],
};
