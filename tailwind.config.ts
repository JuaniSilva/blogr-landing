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
        overpass: ['var(--font-overpass)', ...fontFamily.sans],
        ubuntu: ['var(--font-ubuntu)', ...fontFamily.sans],
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem'],
        'heading-1': ['clamp(1.75rem, 7.5vw, 3.575rem)', '3rem'],
        'heading-2': ['clamp(1.5rem, 5vw, 2.875rem)', '2.5rem'],
      },
      backgroundImage: {
        'pattern-mobile':
          "url('/images/bg-pattern-intro-mobile.svg'), linear-gradient(to bottom, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        'pattern-desktop':
          "url('/images/bg-pattern-intro-desktop.svg'), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        'circle-pattern-mobile':
          "url('/images/bg-pattern-circles.svg'), linear-gradient(to bottom, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
        'circle-pattern-desktop':
          "url('/images/bg-pattern-circles.svg'), linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
      },
      backgroundPosition: {
        'pattern-mobile-position': '35% -150%',
        'pattern-desktop-position': '25%',
        'circle-pattern-mobile-position': '50% -245px, left top',
        'circle-pattern-desktop-position': 'left -51% bottom 17.5%, left top',
      },
      backgroundSize: {
        'circle-pattern-mobile-size': '162%, cover',
        'circle-pattern-desktop-size': 'auto, auto',
      },
    },
  },
  plugins: [],
};
export default config;
