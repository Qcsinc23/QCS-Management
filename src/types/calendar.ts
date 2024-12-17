export type CalendarViewType = 'day' | 'week' | 'month';

export interface CalendarEvent {
  id: string;
  name: string;
  time: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  type: string;
}

export interface DayCell {
  date: Date;
  events: CalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
}