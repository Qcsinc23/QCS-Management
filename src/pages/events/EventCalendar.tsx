import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import Breadcrumb from '../../components/Breadcrumb';
import CalendarHeader from '../../components/calendar/CalendarHeader';
import CalendarGrid from '../../components/calendar/CalendarGrid';
import CalendarFilters from '../../components/calendar/CalendarFilters';
import Button from '../../components/ui/Button';
import { useCalendar } from '../../hooks/useCalendar';

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
  const navigate = useNavigate();
  const {
    currentDate,
    view,
    days,
    setView,
    navigateMonth,
    goToToday
  } = useCalendar(sampleEvents);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-center gap-4">
              <CalendarFilters />
              <Button
                variant="primary"
                onClick={() => navigate({ to: '/events/create' })}
              >
                Create New Event
              </Button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Event Calendar</h1>
          <CalendarHeader
            currentDate={currentDate}
            view={view}
            onViewChange={setView}
            onPrevMonth={() => navigateMonth('prev')}
            onNextMonth={() => navigateMonth('next')}
            onToday={goToToday}
          />
        </div>
      </header>

      <main className="p-8">
        <CalendarGrid days={days} />
      </main>
    </div>
  );
}