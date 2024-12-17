import React from 'react';
import { RouteMap, RouteDetails, VehicleSelection } from '../../components/logistics';

export default function RoutePlanning() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <RouteMap />
      </div>
      <div className="space-y-8">
        <RouteDetails />
        <VehicleSelection />
      </div>
    </div>
  );
}