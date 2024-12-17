import React, { useState } from 'react';
import { MapPin, Filter, RefreshCw, Layers } from 'lucide-react';
import { Card } from '../../ui/Card';
import Button from '../../ui/Button';

interface MapControlsProps {
  onRefresh: () => void;
  onToggleLegend: () => void;
  onToggleFilters: () => void;
}

function MapControls({ onRefresh, onToggleLegend, onToggleFilters }: MapControlsProps) {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      <Button variant="outline" onClick={onRefresh} className="bg-white">
        <RefreshCw className="w-4 h-4" />
      </Button>
      <Button variant="outline" onClick={onToggleLegend} className="bg-white">
        <Layers className="w-4 h-4" />
      </Button>
      <Button variant="outline" onClick={onToggleFilters} className="bg-white">
        <Filter className="w-4 h-4" />
      </Button>
    </div>
  );
}

interface MapLegendProps {
  isVisible: boolean;
}

function MapLegend({ isVisible }: MapLegendProps) {
  if (!isVisible) return null;

  return (
    <Card className="absolute bottom-4 left-4 bg-white">
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm">Active Vehicle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="text-sm">Idle Vehicle</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm">Pickup Point</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm">Drop-off Point</span>
        </div>
      </div>
    </Card>
  );
}

export default function LiveMap() {
  const [showLegend, setShowLegend] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative w-full h-[calc(100vh-12rem)] bg-gray-100 rounded-lg overflow-hidden">
      {/* Map placeholder - In a real implementation, this would be replaced with a map component */}
      <div className="w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
          alt="Map view"
          className="w-full h-full object-cover"
        />
      </div>

      <MapControls
        onRefresh={() => console.log('Refreshing map...')}
        onToggleLegend={() => setShowLegend(!showLegend)}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      <MapLegend isVisible={showLegend} />

      {/* Connection status indicator */}
      <div className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg shadow-sm">
        <span className="text-sm text-green-500 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          Live
        </span>
      </div>
    </div>
  );
}