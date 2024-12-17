import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarGrid from '../components/calendar/CalendarGrid';
import CalendarFilters from '../components/calendar/CalendarFilters';
import { CalendarViewType, DayCell } from '../types/calendar';
import { getDaysInMonth, isToday } from '../utils/calendar';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Event Calendar' },
];

// Sample events data
const sampleEvents = [
  {
    id: '1',
    name: 'Team Meeting',
    time: '09:00 AM',
    status: 'ongoing',
    type: 'meeting'
  },
  {
    id: '2',
    name: 'Product Launch',
    time: '02:00 PM',
    status: 'upcoming',
    type: 'event'
  }
] as const;

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarViewType>('month');
  
  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
    .map(date => ({
      date,
      events: sampleEvents,
      isCurrentMonth: date.getMonth() === currentDate.getMonth(),
      isToday: isToday(date)
    }));

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <Breadcrumb items={breadcrumbItems} />
              <CalendarFilters />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Event Calendar</h1>
            <CalendarHeader
              currentDate={currentDate}
              view={view}
              onViewChange={setView}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              onToday={handleToday}
            />
          </div>
        </header>

        <main className="p-8">
          <CalendarGrid days={days} />
        </main>
      </div>
    </div>
  );
}