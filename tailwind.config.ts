// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Aqui você pode colar a paleta de cores que definimos antes!
      colors: {
        'primary-green': '#899670',
        'dark-green': '#6A7A54',
        'off-white': '#F7F7F5',
        'charcoal-text': '#3A3A3A',
        'neutral-beige': '#EAE7DC',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;