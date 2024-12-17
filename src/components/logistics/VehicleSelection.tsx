import React from 'react';
import { Card } from '../ui/Card';
import Select from '../ui/Select';

export default function VehicleSelection() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Selection</h2>
        <Select
          label="Assign Vehicle"
          options={[
            { value: '', label: 'Select a vehicle' },
            { value: '1', label: 'Truck 001 - Available' },
            { value: '2', label: 'Van 002 - Available' },
          ]}
        />
      </div>
    </Card>
  );
}