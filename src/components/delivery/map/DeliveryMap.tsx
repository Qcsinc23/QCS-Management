import React, { useEffect, useRef } from 'react';
import { MapPin, Truck } from 'lucide-react';
import { Vehicle } from '../../../types/delivery';

interface DeliveryMapProps {
  vehicles: Vehicle[];
  selectedVehicleId?: string;
  onVehicleSelect: (vehicle: Vehicle) => void;
  className?: string;
}

export default function DeliveryMap({
  vehicles,
  selectedVehicleId,
  onVehicleSelect,
  className,
}: DeliveryMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  // In a real implementation, initialize map (Google Maps/Mapbox) here
  useEffect(() => {
    if (!mapRef.current) return;
    // Initialize map
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden"
      >
        {/* Placeholder for map */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
          alt="Map view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
          +
        </button>
        <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
          -
        </button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>Active Vehicles</span>
        </div>
      </div>
    </div>
  );
}