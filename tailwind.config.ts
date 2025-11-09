import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F5F1E8',
          300: '#EDE8DC',
          400: '#E5DDCE',
          500: '#D9CFBC',
        },
        grey: {
          mouse: '#8B8B7A',
          light: '#A5A595',
          dark: '#6B6B5A',
        },
        black: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          medium: '#2C2C2C',
          deep: '#0F0F0F',
        },
        primary: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F5F1E8',
          300: '#EDE8DC',
          400: '#E5DDCE',
          500: '#D9CFBC',
          600: '#8B8B7A',
          700: '#6B6B5A',
          800: '#2C2C2C',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space)'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.75', letterSpacing: '-0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(239, 68, 68, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      backdropBlur: {
        'modern': '20px',
      },
    },
  },
  plugins: [],
}

export default config