/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon-white': '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 45px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.3)',
      },
      textSelection: {
        DEFAULT: {
          'selection': {
            backgroundColor: '#ffffff',
            color: '#000000',
          },
        },
      },
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const selectionUtilities = {
        '::selection': {
          backgroundColor: theme('textSelection.DEFAULT.selection.backgroundColor', '#ffffff'),
          color: theme('textSelection.DEFAULT.selection.color', '#000000'),
        },
        '::-moz-selection': {
          backgroundColor: theme('textSelection.DEFAULT.selection.backgroundColor', '#ffffff'),
          color: theme('textSelection.DEFAULT.selection.color', '#000000'),
        },
      };
      addUtilities(selectionUtilities);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px white',
          color: 'black',
        },
        '.text-shadow-white': {
          'text-shadow': '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    }
  ],
};