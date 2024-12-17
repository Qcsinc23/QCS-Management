import React from 'react';
import { Filter } from 'lucide-react';
import { Card } from '../../ui/Card';
import SearchBar from './SearchBar';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import { InventoryFilters } from '../../../types/inventory';

interface FilterSectionProps {
  filters: InventoryFilters;
  onFilterChange: (filters: InventoryFilters) => void;
}

export default function FilterSection({ filters, onFilterChange }: FilterSectionProps) {
  const handleSearchChange = (search: string) => {
    onFilterChange({ ...filters, search });
  };

  const handleFilterChange = (key: keyof InventoryFilters, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <Card>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchBar
              value={filters.search || ''}
              onChange={handleSearchChange}
              placeholder="Search by name or SKU"
            />
          </div>

          <Select
            label="Category"
            value={filters.categories?.[0] || ''}
            onChange={(e) => handleFilterChange('categories', [e.target.value])}
            options={[
              { value: '', label: 'All Categories' },
              { value: 'electronics', label: 'Electronics' },
              { value: 'furniture', label: 'Furniture' },
            ]}
          />

          <Select
            label="Status"
            value={filters.status || ''}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            options={[
              { value: '', label: 'All Status' },
              { value: 'in-stock', label: 'In Stock' },
              { value: 'low-stock', label: 'Low Stock' },
              { value: 'out-of-stock', label: 'Out of Stock' },
            ]}
          />
        </div>

        <div className="flex justify-end">
          <Button variant="primary">
            <Filter className="w-4 h-4 mr-2" />
            Apply Filters
          </Button>
        </div>
      </div>
    </Card>
  );
}