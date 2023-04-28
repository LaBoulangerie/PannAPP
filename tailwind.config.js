// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#E5E5E5',
        cardBlue: '#4e598c',
        orange: '#FF8C42',
        owner: '#FF8C42',
        owner2: '#ffbb61',
        mod: '#9E4395',
        mod2: '#ca54ff',
        cs: '#c94b4b',
        cs2: '#4b134f',
        dev: '#1ABC9C',
        dev2: '#2ECC71',
        builder: '#F1C40F',
        builder2: '#FFBB61',
        inter: '#007E51',
        inter2: '#01A7BD',
        donors: '#9caae8',
        text: 'rgb(228 217 255 /0.8)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
