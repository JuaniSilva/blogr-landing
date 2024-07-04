import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(356, 100%, 66%)',
        'primary-light-red': 'hsl(355, 100%, 74%)',
        'primary-dark-blue': 'hsl(208, 49%, 24%)',
        'gradient-light-red': 'hsl(13, 100%, 72%)',
        'gradient-red': 'hsl(353, 100%, 62%)',
        'gradient-dark-blue': 'hsl(237, 17%, 21%)',
        'gradient-very-dark-blue': 'hsl(237, 23%, 32%)',
        'neutral-grayish-blue': 'hsl(240, 2%, 79%)',
        'neutral-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'neutral-very-dark-blue': 'hsl(240, 10%, 16%)',
        'nav-menu-text': '#647181',
        'nav-menu': '#EFEFF1',
      },
      fontFamily: {
        sans: ['var(--font-overpass)', ...fontFamily.sans],
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem'],
      },
    },
  },
  plugins: [],
};
export default config;
