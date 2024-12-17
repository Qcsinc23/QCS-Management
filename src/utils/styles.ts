import { colors, typography, spacing } from '../constants/theme';

export const getTextStyles = (variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption') => {
  switch (variant) {
    case 'h1':
      return `text-2xl font-bold text-[${colors.text.primary}]`;
    case 'h2':
      return `text-xl font-semibold text-[${colors.text.primary}]`;
    case 'h3':
      return `text-lg font-semibold text-[${colors.text.primary}]`;
    case 'body':
      return `text-base text-[${colors.text.primary}]`;
    case 'caption':
      return `text-sm text-[${colors.text.secondary}]`;
    default:
      return '';
  }
};

export const getStatusColor = (status: 'success' | 'warning' | 'error' | 'info') => {
  return colors.status[status];
};

export const getFocusStyles = () => {
  return `focus:outline-none focus:ring-2 focus:ring-[${colors.primary.orange}] focus:ring-offset-2`;
};

export const getHoverStyles = (variant: 'primary' | 'secondary') => {
  switch (variant) {
    case 'primary':
      return 'hover:bg-opacity-90 hover:shadow-lg transition-all';
    case 'secondary':
      return 'hover:bg-gray-50 transition-colors';
    default:
      return '';
  }
};