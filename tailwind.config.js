module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#b44b2c', foreground: '#ffffff' },
        brand: {
          red: '#b44b2c',
          ink: '#111111',
          cream: '#ece0d3',
          paper: '#f6efe7',
          gold: '#d7ab63',
        },
        background: '#f6efe7',
        foreground: '#111111',
      },
      fontFamily: {
        display: ['Berry Bold', 'Times New Roman', 'Georgia', 'serif'],
        script: ['Berry Bold', 'Times New Roman', 'Georgia', 'serif'],
        logo: ['Berry Bold', 'Times New Roman', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
