import { useState, useMemo } from 'react';
import { CalendarViewType, DayCell } from '../types/calendar';
import { getDaysInMonth, isToday } from '../utils/calendar';

export function useCalendar(events: any[]) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarViewType>('month');

  const days = useMemo(() => {
    return getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
      .map(date => ({
        date,
        events,
        isCurrentMonth: date.getMonth() === currentDate.getMonth(),
        isToday: isToday(date)
      }));
  }, [currentDate, events]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return {
    currentDate,
    view,
    days,
    setView,
    navigateMonth,
    goToToday,
  };
}