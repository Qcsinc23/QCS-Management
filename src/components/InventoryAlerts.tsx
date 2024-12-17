import React from 'react';
import { InventoryItem } from '../types/inventory';
import InventoryAlertItem from './InventoryAlertItem';

interface InventoryAlertsProps {
  items: InventoryItem[];
}

export default function InventoryAlerts({ items }: InventoryAlertsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-900 p-6 border-b border-gray-100">
        Inventory Alerts
      </h2>
      <div className="divide-y divide-gray-100">
        {items.map((item, index) => (
          <InventoryAlertItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}