import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'card-background': 'hsl(var(--card-background))',
        'header-background': 'hsl(var(--header-background))',
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
        heading: ['var(--font-oswald)'],
      },
    },
  },
  plugins: [],
}

export default config
