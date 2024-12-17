import React, { useState } from 'react';
import { useParams } from '@tanstack/react-router';
import ItemDetailsHeader from '../../components/inventory/details/ItemDetailsHeader';
import ItemDetailsTabs, { ItemDetailsTab } from '../../components/inventory/details/ItemDetailsTabs';
import OverviewTab from '../../components/inventory/details/tabs/OverviewTab';
import { InventoryItem } from '../../types/inventory';

// Sample data - in a real app, this would come from an API
const sampleItem: InventoryItem = {
  id: '1',
  name: 'Conference Badges',
  sku: 'CONF-001',
  category: 'Supplies',
  supplier: 'Badge Co',
  availableQty: 500,
  reservedQty: 100,
  minimumQty: 50,
  location: 'Warehouse 1',
  status: 'in-stock',
  lastUpdated: new Date(),
};

export default function ItemDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<ItemDetailsTab>('overview');

  const handleEdit = () => {
    // Open edit modal or navigate to edit page
    console.log('Edit item:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ItemDetailsHeader
        item={sampleItem}
        onEdit={handleEdit}
      />

      <ItemDetailsTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <main className="p-8">
        {activeTab === 'overview' && <OverviewTab item={sampleItem} />}
        {/* Add other tab components as needed */}
      </main>
    </div>
  );
}