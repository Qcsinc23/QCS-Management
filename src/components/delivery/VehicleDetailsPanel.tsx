import React from 'react';
import { X, Truck } from 'lucide-react';
import { Card } from '../ui/Card';

interface VehicleDetailsPanelProps {
  vehicle: any;
  onClose: () => void;
}

export default function VehicleDetailsPanel({ vehicle, onClose }: VehicleDetailsPanelProps) {
  return (
    <div className="absolute top-4 right-4 w-full max-w-sm lg:max-w-md">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Vehicle Details</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Truck className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{vehicle?.id}</div>
                <div className="text-sm text-gray-500">Vehicle ID</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Current Speed</div>
                <div className="font-medium text-gray-900">45 KM/h</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">ETA</div>
                <div className="font-medium text-gray-900">25 mins</div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">Driver</div>
              <div className="flex items-center gap-3 mt-1">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                  alt="Driver"
                  className="w-8 h-8 rounded-full"
                />
                <div className="font-medium text-gray-900">John Smith</div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">Status</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="font-medium text-gray-900">Active</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}