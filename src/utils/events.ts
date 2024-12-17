// Event-specific utilities
import { EventFormData, EventStatus } from '../types/event';
import { formatDateRange, formatTime } from './date';

export const getEventDuration = (startDate: Date, endDate: Date): string => {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '1 day';
  if (diffDays < 1) {
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return `${diffHours} hour${diffHours === 1 ? '' : 's'}`;
  }
  return `${diffDays} days`;
};

export const getEventTimeRange = (startDate: Date, endDate: Date): string => {
  return `${formatTime(startDate)} - ${formatTime(endDate)}`;
};

export const getEventStatus = (startDate: Date, endDate: Date): EventStatus => {
  const now = new Date();
  
  if (now < startDate) return 'upcoming';
  if (now > endDate) return 'completed';
  return 'ongoing';
};

export const formatEventSummary = (event: EventFormData): string => {
  const parts = [
    event.name,
    formatDateRange(new Date(event.startDate), new Date(event.endDate)),
    event.location?.city,
    event.location?.country,
  ];
  
  return parts.filter(Boolean).join(' • ');
};