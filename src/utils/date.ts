// Date formatting and manipulation utilities
export const formatDateRange = (start: Date, end: Date): string => {
  const isSameDay = start.toDateString() === end.toDateString();
  const startDate = start.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  if (isSameDay) {
    return startDate;
  }
  
  const endDate = end.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return `${startDate} - ${endDate}`;
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const isDateInPast = (date: Date): boolean => {
  return date < new Date();
};

export const isDateInFuture = (date: Date): boolean => {
  return date > new Date();
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};