/** @type {import('tailwindcss').Config} */
import { colors, typography, spacing, borderRadius, shadows } from './src/constants/theme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        status: colors.status,
      },
      fontFamily: {
        sans: [typography.fontFamily],
      },
      fontSize: typography.sizes,
      fontWeight: typography.weights,
      lineHeight: typography.lineHeights,
      spacing,
      borderRadius,
      boxShadow: shadows,
      zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modal: 1040,
        popover: 1050,
        tooltip: 1060,
      },
    },
  },
  plugins: [],
};