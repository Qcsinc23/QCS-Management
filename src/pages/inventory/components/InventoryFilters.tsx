import React from 'react';
import { Search } from 'lucide-react';
import Select from '../../../components/ui/Select';

export default function InventoryFilters() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, SKU, or category"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        <Select
          options={[
            { value: '', label: 'All Categories' },
            { value: 'supplies', label: 'Supplies' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'equipment', label: 'Equipment' },
          ]}
          placeholder="Category"
        />

        <Select
          options={[
            { value: '', label: 'All Status' },
            { value: 'in-stock', label: 'In Stock' },
            { value: 'low-stock', label: 'Low Stock' },
            { value: 'out-of-stock', label: 'Out of Stock' },
          ]}
          placeholder="Status"
        />
      </div>
    </div>
  );
}