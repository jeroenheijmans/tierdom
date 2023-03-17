/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    {
      pattern: /(border|bg|text)-(S|A|B|C|D|E|F)-tier/,
    },
  ],
  theme: {
    extend: {
      maxWidth: {
        page: '1658px',
      },
      colors: {
        'S-tier': '#e07a79',
        'A-tier': '#ebba79',
        'B-tier': '#f2ed82',
        'C-tier': '#a9d86d',
        'D-tier': '#91b8e6',
        'E-tier': '#7879c1',
        'F-tier': '#ce86ca',
      },
    },
  },
  plugins: [],
};
