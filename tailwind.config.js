/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
          },
          dark: {
            100: '#1e1e1e',
            200: '#2d2d2d',
            300: '#3d3d3d',
            400: '#4d4d4d',
          },
          accent: {
            orange: '#ff6b35',
            yellow: '#f7931e',
            blue: '#0074d9',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Space Grotesk', 'sans-serif'],
        },
        animation: {
          'fade-up': 'fadeUp 0.5s ease-out',
          'fade-down': 'fadeDown 0.5s ease-out',
          'fade-in': 'fadeIn 0.5s ease-out',
          'slide-in-right': 'slideInRight 0.5s ease-out',
          'slide-in-left': 'slideInLeft 0.5s ease-out',
          'scale-up': 'scaleUp 0.5s ease-out',
          'float': 'float 3s ease-in-out infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
          'gradient': 'gradient 8s ease infinite',
          'text-reveal': 'textReveal 0.8s ease-out',
          'morph': 'morph 8s ease-in-out infinite',
        },
        keyframes: {
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeDown: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          scaleUp: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          gradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          textReveal: {
            '0%': { 
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
              opacity: '0'
            },
            '100%': { 
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              opacity: '1'
            },
          },
          morph: {
            '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
            '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
            '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'mesh-gradient': 'linear-gradient(45deg, #ff6b35 0%, #f7931e 25%, #dc2626 50%, #ff6b35 75%, #f7931e 100%)',
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }