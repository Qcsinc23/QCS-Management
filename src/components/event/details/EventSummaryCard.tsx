import React from 'react';
import { MapPin, User, Calendar } from 'lucide-react';
import { Card } from '../../ui/Card';
import Typography from '../../ui/Typography';

interface EventSummaryCardProps {
  date: string;
  time: string;
  location: string;
  contactPerson: string;
  onViewLocation: () => void;
}

export default function EventSummaryCard({
  date,
  time,
  location,
  contactPerson,
  onViewLocation,
}: EventSummaryCardProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-4">Event Summary</Typography>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Calendar className="w-4 h-4" />
              <Typography variant="caption">Date & Time</Typography>
            </div>
            <Typography variant="body">{date}</Typography>
            <Typography variant="body">{time}</Typography>
          </div>

          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <MapPin className="w-4 h-4" />
              <Typography variant="caption">Location</Typography>
            </div>
            <Typography variant="body">{location}</Typography>
            <button
              onClick={onViewLocation}
              className="mt-2 text-sm text-orange-500 hover:text-orange-600"
            >
              View Location on Map
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <User className="w-4 h-4" />
              <Typography variant="caption">Contact Person</Typography>
            </div>
            <Typography variant="body">{contactPerson}</Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}