module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sageGreen: '#B2AC88',
        beige: '#F7F2E9',
        sand: '#E8DAC8',
        oliveGreen: '#808000',
        darkBrown: '#4A403A',
        lightBrown: '#A48C7A',
        terracotta: '#D26A4E',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};
