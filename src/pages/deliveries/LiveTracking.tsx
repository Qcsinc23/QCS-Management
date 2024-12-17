import React, { useState } from 'react';
import { Filter, RefreshCw, HelpCircle } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import LiveMap from '../../components/delivery/map/LiveMap';
import VehicleDetailsPanel from '../../components/delivery/details/VehicleDetailsPanel';
import Button from '../../components/ui/Button';
import { useVehicleTracking } from '../../hooks/useVehicleTracking';
import { Vehicle } from '../../types/delivery';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'Live Tracking' },
];

export default function LiveTracking() {
  const { vehicles, isLoading, error, lastUpdate } = useVehicleTracking();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => {}}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter Map</span>
              </Button>
              <Button
                variant="outline"
                onClick={handleRefresh}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh Map</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => {}}
                className="flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Legend</span>
              </Button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Live Tracking</h1>
        </div>
      </header>

      <main className="p-8">
        <div className="relative">
          <LiveMap />

          {selectedVehicle && (
            <VehicleDetailsPanel
              vehicle={selectedVehicle}
              onClose={() => setSelectedVehicle(null)}
            />
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-orange-500">Updating...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-red-500">Connection lost. Retrying...</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}