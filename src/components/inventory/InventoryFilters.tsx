import React from 'react';
import { Card } from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

export default function InventoryFilters() {
  return (
    <Card>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="Search by name/SKU"
            type="search"
          />
          <Select
            options={[
              { value: '', label: 'All Categories' },
              { value: 'electronics', label: 'Electronics' },
              { value: 'furniture', label: 'Furniture' },
            ]}
          />
          <Select
            options={[
              { value: '', label: 'All Locations' },
              { value: 'warehouse-1', label: 'Warehouse 1' },
              { value: 'warehouse-2', label: 'Warehouse 2' },
            ]}
          />
          <Select
            options={[
              { value: '', label: 'All Status' },
              { value: 'in-stock', label: 'In Stock' },
              { value: 'low-stock', label: 'Low Stock' },
              { value: 'out-of-stock', label: 'Out of Stock' },
            ]}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="primary">Search</Button>
        </div>
      </div>
    </Card>
  );
}