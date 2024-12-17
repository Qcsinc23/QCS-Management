import React, { useState } from 'react';

export default function ActiveDeliveries() {
  const [view, setView] = useState<'map' | 'list'>('map');

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Active Deliveries</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setView('map')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'map'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Map View
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'list'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            List View
          </button>
        </div>
      </div>
      <div className="p-6">
        {view === 'map' ? (
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
              alt="Map view"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900">Paris, France</h3>
              <p className="text-sm text-gray-600">2 active deliveries</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900">Berlin, Germany</h3>
              <p className="text-sm text-gray-600">1 active delivery</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}