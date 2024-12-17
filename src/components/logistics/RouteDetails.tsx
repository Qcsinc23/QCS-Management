import React from 'react';
import { Card } from '../ui/Card';
import Button from '../ui/Button';
import { MapPin } from 'lucide-react';

const stops = [
  { address: '181 Mercer Street, New York', time: '09:00 AM', type: 'pickup' },
  { address: '350 5th Ave, New York', time: '10:30 AM', type: 'dropoff' },
];

export default function RouteDetails() {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Route Details</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Auto-optimize</Button>
            <Button variant="outline" size="sm">Reverse</Button>
          </div>
        </div>

        <div className="space-y-4">
          {stops.map((stop, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{stop.address}</p>
                <p className="text-sm text-gray-600">{stop.time}</p>
                <p className="text-xs text-gray-500 capitalize">{stop.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}