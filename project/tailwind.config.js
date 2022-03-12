module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,tx,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '800': '800px',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '50rem',
      },
      backgroundImage: {
        'guku-image': "url('/img/IMG_1853.JPG')",
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}
