import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import Table from '../../../components/ui/Table';
import StatusBadge from '../../../components/ui/StatusBadge';
import { InventoryItem } from '../../../types/inventory';

interface InventoryTableProps {
  selectedItems: string[];
  onSelectItems: (ids: string[]) => void;
}

const columns = [
  {
    key: 'name',
    header: 'Item Name',
    render: (item: InventoryItem) => (
      <div className="flex items-center gap-3">
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-10 h-10 rounded object-cover"
          />
        )}
        <div>
          <div className="font-medium text-gray-900">{item.name}</div>
          <div className="text-sm text-gray-500">{item.sku}</div>
        </div>
      </div>
    ),
  },
  { key: 'category', header: 'Category' },
  {
    key: 'availableQty',
    header: 'Avail Qty',
    className: 'text-right',
  },
  {
    key: 'reservedQty',
    header: 'Res Qty',
    className: 'text-right',
  },
  { key: 'location', header: 'Location' },
  {
    key: 'status',
    header: 'Status',
    render: (item: InventoryItem) => (
      <StatusBadge status={item.status} />
    ),
  },
  {
    key: 'actions',
    header: '',
    render: (item: InventoryItem) => (
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => console.log('View', item)}
          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
        >
          <Eye className="w-4 h-4" />
        </button>
        <button
          onClick={() => console.log('Edit', item)}
          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => console.log('Delete', item)}
          className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];

// Sample data
const sampleItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Conference Badges',
    sku: 'CONF-001',
    category: 'Supplies',
    availableQty: 500,
    reservedQty: 100,
    minimumQty: 50,
    location: 'Warehouse 1',
    status: 'in-stock',
    lastUpdated: new Date(),
  },
  {
    id: '2',
    name: 'Event Banners',
    sku: 'BNRS-002',
    category: 'Marketing',
    availableQty: 25,
    reservedQty: 10,
    minimumQty: 15,
    location: 'Warehouse 2',
    status: 'low-stock',
    lastUpdated: new Date(),
  },
];

export default function InventoryTable({
  selectedItems,
  onSelectItems,
}: InventoryTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Table
        columns={columns}
        data={sampleItems}
        selectedRows={selectedItems}
        onSelectRows={onSelectItems}
      />
    </div>
  );
}