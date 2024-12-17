import React from 'react';
import Table from '../ui/Table';
import StatusBadge from '../ui/StatusBadge';
import ActionButtons from '../ui/ActionButtons';
import { InventoryItem } from '../../types/inventory';

const columns = [
  {
    key: 'name',
    header: 'Item Name',
    render: (name: string, item: InventoryItem) => (
      <div className="flex items-center gap-3">
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={name}
            className="w-10 h-10 rounded object-cover"
          />
        )}
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{item.sku}</div>
        </div>
      </div>
    ),
  },
  { key: 'category', header: 'Category' },
  { key: 'availableQty', header: 'Available Qty' },
  { key: 'reservedQty', header: 'Reserved Qty' },
  { key: 'location', header: 'Location' },
  {
    key: 'status',
    header: 'Status',
    render: (status: string) => <StatusBadge status={status as any} />,
  },
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

const sampleItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Conference Badges',
    sku: 'CONF-001',
    category: 'Supplies',
    availableQty: 500,
    reservedQty: 100,
    location: 'Warehouse 1',
    status: 'in-stock',
  },
  {
    id: '2',
    name: 'Presentation Materials',
    sku: 'PRES-001',
    category: 'Documents',
    availableQty: 50,
    reservedQty: 30,
    location: 'Warehouse 2',
    status: 'low-stock',
  },
];

export default function InventoryTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Table
        columns={columns}
        data={sampleItems}
        onRowClick={(item) => console.log('Clicked item:', item)}
      />
    </div>
  );
}