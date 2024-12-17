import React from 'react';
import { ArrowLeft, Edit2 } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import Button from '../../ui/Button';
import StatusBadge from '../../ui/StatusBadge';
import { InventoryItem } from '../../../types/inventory';

interface ItemDetailsHeaderProps {
  item: InventoryItem;
  onEdit: () => void;
}

export default function ItemDetailsHeader({ item, onEdit }: ItemDetailsHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-8 py-6">
        <button
          onClick={() => navigate({ to: '/inventory' })}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Inventory</span>
        </button>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
              <StatusBadge status={item.status} />
            </div>
            <p className="text-sm text-gray-600">SKU: {item.sku}</p>
          </div>

          <Button variant="primary" onClick={onEdit}>
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Item
          </Button>
        </div>
      </div>
    </div>
  );
}