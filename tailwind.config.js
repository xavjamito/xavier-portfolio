/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'terminal-black': 'var(--terminal-black)',
        'terminal-green': 'var(--terminal-green)',
        'terminal-yellow': 'var(--terminal-yellow)',
        'terminal-blue': 'var(--terminal-blue)',
        'terminal-purple': 'var(--terminal-purple)',
        'terminal-red': 'var(--terminal-red)',
        'terminal-cyan': 'var(--terminal-cyan)',
        secondary: "#cccccc",
        accent: "#00ffff",
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        yellow: {
          400: '#facc15',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--primary': '#64ffda',
          '--background': '#0a192f',
          '--text': '#e6f1ff',
          '--text-secondary': '#8892b0',
          '--terminal-black': '#282c34',
          '--terminal-green': '#98c379',
          '--terminal-yellow': '#e5c07b',
          '--terminal-blue': '#61afef',
          '--terminal-purple': '#c678dd',
          '--terminal-red': '#e06c75',
          '--terminal-cyan': '#56b6c2',
        },
      });
    },
  ],
  safelist: [
    'bg-terminal-blue/20',
    'bg-terminal-green/20',
    'bg-terminal-green/30',
    'bg-terminal-purple/10',
    'border-terminal-purple/50',
  ],
} 