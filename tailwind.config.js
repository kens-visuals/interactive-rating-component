module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(215, 20%, 16%)',
        'primary-reduced': 'hsl(215, 20%, 22%)',
        'primary-dark': 'hsl(216, 12%, 54%)',
        'primary-light': 'hsl(217, 12%, 63%)',
        secondary: 'hsl(25, 97%, 53%)',
        tertiary: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        Overpass: ['Overpass', 'sans-serif'],
      },
      lineHeight: {
        0: '0',
      },
    },
  },
  plugins: [],
};
