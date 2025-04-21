module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#B2AC88',
        beige: '#F7F2E9',
        sand: '#E8DAC8',
        olive: '#808000',
        darkBrown: '#4A403A',
        lightBrown: '#A48C7A',
        terracotta: '#D26A4E',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
