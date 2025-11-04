// --- Applying your custom branding guidelines ---
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        graphite: 'var(--color-bg-secondary)',
        carbon: 'var(--color-bg-tertiary)',
        'gold-base': 'var(--color-accent-primary)',
        'gold-pale': 'var(--color-accent-pale)',
        'gold-antique': 'var(--color-accent-secondary)',
        'text-main': 'var(--color-text-main)',
        'text-muted': 'var(--color-text-muted)',
        'brand-teal': 'var(--color-bg-accent)',
        'service-1': 'var(--color-service-1, #0F3E3E)',
        'service-2': 'var(--color-service-2, #2B4F6A)',
        'service-3': 'var(--color-service-3, #4A4E7A)',
        'service-4': 'var(--color-service-4, #6A4D8A)',
      },
    },
  },
};