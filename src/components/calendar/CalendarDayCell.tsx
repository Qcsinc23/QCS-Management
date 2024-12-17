import React from 'react';
import { DayCell } from '../../types/calendar';
import CalendarEventCard from './CalendarEventCard';

interface CalendarDayCellProps {
  day: DayCell;
}

export default function CalendarDayCell({ day }: CalendarDayCellProps) {
  return (
    <div className={`min-h-[120px] p-2 border-r border-b border-gray-200 ${
      day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
    }`}>
      <div className={`text-sm font-medium mb-1 ${
        day.isToday
          ? 'text-orange-500'
          : day.isCurrentMonth
          ? 'text-gray-900'
          : 'text-gray-400'
      }`}>
        {day.date.getDate()}
      </div>
      <div className="space-y-1">
        {day.events.map((event) => (
          <CalendarEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}