import React from 'react';
import { Package, X } from 'lucide-react';
import { InventoryItem } from '../../../../../types/inventory';

interface InventoryItemListProps {
  selectedItems: InventoryItem[];
  onItemsChange: (items: InventoryItem[]) => void;
  error?: string;
}

export default function InventoryItemList({
  selectedItems,
  onItemsChange,
  error,
}: InventoryItemListProps) {
  const removeItem = (itemId: string) => {
    onItemsChange(selectedItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="space-y-4">
      {selectedItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg">
              <Package className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}

      {selectedItems.length === 0 && (
        <div className="text-center py-8 px-4 bg-gray-50 rounded-lg">
          <Package className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">No items selected</p>
          <p className="text-sm text-gray-500 mt-1">
            Search and select items from the inventory
          </p>
        </div>
      )}
    </div>
  );
}