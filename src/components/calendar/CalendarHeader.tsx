import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarViewType } from '../../types/calendar';

interface CalendarHeaderProps {
  currentDate: Date;
  view: CalendarViewType;
  onViewChange: (view: CalendarViewType) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export default function CalendarHeader({
  currentDate,
  view,
  onViewChange,
  onPrevMonth,
  onNextMonth,
  onToday
}: CalendarHeaderProps) {
  const viewOptions: CalendarViewType[] = ['day', 'week', 'month'];
  
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onToday}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Today
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevMonth}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={onNextMonth}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-lg font-semibold text-gray-900">
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              year: 'numeric'
            }).format(currentDate)}
          </span>
        </div>
      </div>
      
      <div className="flex bg-gray-100 rounded-lg p-1">
        {viewOptions.map((option) => (
          <button
            key={option}
            onClick={() => onViewChange(option)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === option
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}