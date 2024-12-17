import React from 'react';
import { InventoryItem } from '../types/inventory';

interface InventoryAlertItemProps {
  item: InventoryItem;
}

export default function InventoryAlertItem({ item }: InventoryAlertItemProps) {
  return (
    <div className="p-6 flex items-center justify-between">
      <div>
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <span className="text-sm text-red-500">Low Stock</span>
      </div>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
        Restock
      </button>
    </div>
  );
}