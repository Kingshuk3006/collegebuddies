module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Audiowide: ['Audiowide', 'cursive'],
        gilroy: ['gilroy', 'Sans-serif'],
      },
      colors: {
        violet: '#794AD4',
      },
    },
  },
  plugins: [
    function({addVariant}) {
      addVariant ('child', '& > *');
      addVariant ('child-hover', '& > *:hover');
    },
  ],
};
