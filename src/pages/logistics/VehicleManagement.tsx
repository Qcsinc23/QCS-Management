import React from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/ui/Button';
import { VehiclesTable } from '../../components/logistics';

export default function VehicleManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vehicle Management</h1>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add New Vehicle
        </Button>
      </div>

      <VehiclesTable />
    </div>
  );
}