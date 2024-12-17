import React from 'react';
import { X, Truck, MapPin } from 'lucide-react';
import { Card } from '../ui/Card';

interface MapLegendProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapLegend({ isOpen, onClose }: MapLegendProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-4 left-4 w-full max-w-xs">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Map Legend</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded">
                <Truck className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm text-gray-600">Active Vehicle</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded">
                <Truck className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-sm text-gray-600">Idle Vehicle</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded">
                <Truck className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-sm text-gray-600">Stopped Vehicle</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-600">Pickup Point</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-600">Drop-off Point</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}