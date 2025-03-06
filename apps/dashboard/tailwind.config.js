const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
import PrimeUI from 'tailwindcss-primeui';
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
      },
    }
  },
  darkMode: 'class',
  plugins: [PrimeUI],
};
