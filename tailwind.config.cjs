/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables future theme toggling (Light/Dark mode)
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], 
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'], 
      },
      // Maps colors to CSS variables so we can swap themes instantly later
      colors: {
        workspace: {
          bg: 'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          glow: 'rgb(var(--color-glow) / <alpha-value>)',
          text: {
            primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
            muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          }
        }
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgb(var(--color-accent) / 0.15)',
        'glow-hover': '0 0 25px -5px rgb(var(--color-glow) / 0.25)',
      },
      // Reusable Motion Tokens
      transitionTimingFunction: {
        'workspace-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'workspace-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'workspace-fast': '150ms',
        'workspace-base': '300ms',
        'workspace-slow': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.workspace.text.muted'),
            h1: { color: theme('colors.workspace.text.primary'), fontWeight: '700' },
            h2: { color: theme('colors.workspace.text.primary'), fontWeight: '600', borderBottom: `1px solid ${theme('colors.workspace.border')}`, paddingBottom: '0.5rem' },
            h3: { color: theme('colors.workspace.text.primary'), fontWeight: '600' },
            strong: { color: theme('colors.workspace.text.primary') },
            a: { color: theme('colors.workspace.accent'), '&:hover': { color: theme('colors.workspace.glow') }, textDecoration: 'none' },
            code: { color: theme('colors.workspace.glow'), backgroundColor: theme('colors.workspace.surface'), padding: '0.25rem 0.4rem', borderRadius: '0.25rem', fontWeight: '500' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: { backgroundColor: theme('colors.workspace.surface'), border: `1px solid ${theme('colors.workspace.border')}` },
            blockquote: { borderLeftColor: theme('colors.workspace.accent'), color: theme('colors.workspace.text.muted'), fontStyle: 'italic' },
            hr: { borderColor: theme('colors.workspace.border') },
            table: { width: '100%', textAlign: 'left', borderCollapse: 'collapse' },
            th: { borderBottom: `1px solid ${theme('colors.workspace.border')}`, paddingBottom: '0.5rem', color: theme('colors.workspace.text.primary') },
            td: { borderBottom: `1px solid ${theme('colors.workspace.border')}`, padding: '0.75rem 0' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}