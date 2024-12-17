import React, { useState } from 'react';
import { CalendarEvent } from '../../types/calendar';
import { Eye, Edit2, Trash2 } from 'lucide-react';

interface CalendarEventCardProps {
  event: CalendarEvent;
}

export default function CalendarEventCard({ event }: CalendarEventCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const statusColors = {
    upcoming: 'bg-green-500',
    ongoing: 'bg-orange-500',
    completed: 'bg-[#052B5D]'
  };
  
  return (
    <div className="relative">
      <button
        className={`w-full text-left px-2 py-1 rounded text-xs text-white ${
          statusColors[event.status]
        }`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="font-medium truncate">{event.name}</div>
        <div className="text-white/80">{event.time}</div>
      </button>
      
      {showTooltip && (
        <div className="absolute z-10 left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-orange-100 p-3">
          <div className="mb-2">
            <div className="font-medium text-gray-900">{event.name}</div>
            <div className="text-sm text-gray-600 capitalize">{event.status}</div>
            <div className="text-sm text-gray-500">{event.time}</div>
          </div>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Edit2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}