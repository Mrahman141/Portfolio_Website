/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '128': '32rem',
      },
      colors: {
        'Midnight-Blue': '#0c0d2e',
        'Deep-Midnight-Blue': '#07081a',
        'Night-Sky': '#1a1a2e',
        'Shadowy-Indigo': '#070922',
        'Nocturnal-Indigo': '#0c0f1f',
        'text-col': '#9a8fa1'
      },
    },
  },
  plugins: [],
}
