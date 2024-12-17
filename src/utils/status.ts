import { colors } from '../constants/theme';

export type StatusType = 'upcoming' | 'ongoing' | 'completed' | 'delayed' | 'canceled';

export const getStatusColor = (status: StatusType): string => {
  switch (status) {
    case 'upcoming':
      return colors.status.green;
    case 'ongoing':
      return colors.status.orange;
    case 'completed':
      return colors.primary.navy;
    case 'delayed':
      return colors.status.red;
    case 'canceled':
      return colors.status.red;
    default:
      return colors.text.secondary;
  }
};

export const getStatusLabel = (status: StatusType): string => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};