import React from 'react';

export default function CalendarFilters() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <select className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
          <option value="">Event Type</option>
          <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="seminar">Seminar</option>
        </select>
      </div>
      <div className="relative">
        <select className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
          <option value="">Event Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}