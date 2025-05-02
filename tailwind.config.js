/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fc',
          400: '#36adf8',
          500: '#0c96e6',
          600: '#0077c2',
          700: '#015f9e',
          800: '#065183',
          900: '#0b446c',
        },
        secondary: {
          50: '#edfcf9',
          100: '#d6f7f2',
          200: '#b2efe7',
          300: '#7ee2d7',
          400: '#43cac0',
          500: '#20aca6',
          600: '#108a88',
          700: '#0f6e70',
          800: '#11575a',
          900: '#11494b',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdaa9',
          300: '#ffbe73',
          400: '#fd9839',
          500: '#fc7a12',
          600: '#ed5a07',
          700: '#c43e08',
          800: '#9c300f',
          900: '#7e280f',
        },
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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}