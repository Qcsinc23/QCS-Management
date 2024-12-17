import React from 'react';
import Table from '../ui/Table';
import StatusBadge from '../ui/StatusBadge';
import ActionButtons from '../ui/ActionButtons';
import { Vehicle } from '../../types/logistics';

const columns = [
  { key: 'name', header: 'Vehicle' },
  { key: 'type', header: 'Type' },
  { key: 'capacity', header: 'Capacity' },
  {
    key: 'status',
    header: 'Status',
    render: (status: string) => <StatusBadge status={status as any} />,
  },
  { key: 'driver', header: 'Assigned Driver' },
  {
    key: 'actions',
    header: 'Actions',
    render: () => (
      <ActionButtons
        onView={() => console.log('View')}
        onEdit={() => console.log('Edit')}
        onDelete={() => console.log('Delete')}
      />
    ),
  },
];

const sampleVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Truck 001',
    type: 'Delivery Truck',
    capacity: '550 KG',
    status: 'available',
    driver: 'John Smith',
  },
  {
    id: '2',
    name: 'Van 002',
    type: 'Cargo Van',
    capacity: '250 KG',
    status: 'in-use',
    driver: 'Sarah Johnson',
  },
];

export default function VehiclesTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Table
        columns={columns}
        data={sampleVehicles}
        onRowClick={(vehicle) => console.log('Clicked vehicle:', vehicle)}
      />
    </div>
  );
}