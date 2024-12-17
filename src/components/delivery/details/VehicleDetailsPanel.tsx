import React from 'react';
import { X, Truck, Phone, Mail } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Vehicle } from '../../../types/delivery';

interface VehicleDetailsPanelProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export default function VehicleDetailsPanel({ vehicle, onClose }: VehicleDetailsPanelProps) {
  return (
    <div className="absolute top-4 right-4 w-full max-w-sm">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Vehicle Details</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Truck className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{vehicle.name}</div>
                <div className="text-sm text-gray-500">Vehicle ID: {vehicle.id}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Current Speed</div>
                <div className="font-medium text-gray-900">
                  {vehicle.speed ? `${vehicle.speed} KM/h` : 'N/A'}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    vehicle.status === 'active' ? 'bg-green-500' :
                    vehicle.status === 'idle' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <span className="font-medium text-gray-900 capitalize">
                    {vehicle.status}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Driver</div>
              <div className="flex items-center gap-3">
                <img
                  src={vehicle.driver.photo}
                  alt={vehicle.driver.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {vehicle.driver.name}
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">Estimated Arrival</div>
              <div className="font-medium text-gray-900">
                {new Date(vehicle.lastUpdated).toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}