import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import InventoryTable from './components/InventoryTable';
import InventoryFilters from './components/InventoryFilters';
import { InventoryItem } from '../../types/inventory';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Inventory List' },
];

export default function InventoryList() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add New Item
              </Button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        </div>
      </header>

      <main className="p-8 space-y-6">
        <Card>
          <div className="p-6">
            <InventoryFilters />
          </div>
        </Card>

        <InventoryTable
          selectedItems={selectedItems}
          onSelectItems={setSelectedItems}
        />
      </main>
    </div>
  );
}