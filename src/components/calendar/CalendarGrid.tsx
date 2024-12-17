import React from 'react';
import { DayCell } from '../../types/calendar';
import CalendarDayCell from './CalendarDayCell';

interface CalendarGridProps {
  days: DayCell[];
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid({ days }: CalendarGridProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="grid grid-cols-7 bg-[#052B5D] text-white rounded-t-xl">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-3 text-center text-sm font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 border-l border-t border-gray-200">
        {days.map((day, idx) => (
          <CalendarDayCell key={idx} day={day} />
        ))}
      </div>
    </div>
  );
}