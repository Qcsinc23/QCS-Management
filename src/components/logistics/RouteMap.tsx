import React from 'react';
import { Card } from '../ui/Card';

export default function RouteMap() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Route Map</h2>
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
            alt="Map view"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
}