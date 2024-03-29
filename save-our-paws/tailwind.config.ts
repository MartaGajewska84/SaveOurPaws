import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js, ts, jsx, tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      mainHeading: ['Love Ya Like A Sister', 'cursive'],
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('flowbite/plugin')],
};
export default config;
