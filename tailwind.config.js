/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        graphite: 'var(--color-bg-secondary)',
        carbon: 'var(--color-bg-tertiary)',
        'brand-teal': 'var(--color-bg-accent)',
        'gold-base': 'var(--color-accent-primary)',
        'gold-antique': 'var(--color-accent-secondary)',
        'gold-pale': 'var(--color-accent-pale)',
        'text-main': 'var(--color-text-main)',
        'text-muted': 'var(--color-text-muted)',
        'service-1': 'var(--color-service-1)',
        'service-2': 'var(--color-service-2)',
        'service-3': 'var(--color-service-3)',
        'service-4': 'var(--color-service-4)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
