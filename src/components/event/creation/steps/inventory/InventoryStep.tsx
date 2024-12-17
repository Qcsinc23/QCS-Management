import React from 'react';
import { Card } from '../../../../ui/Card';
import Typography from '../../../../ui/Typography';
import InventoryItemList from './InventoryItemList';
import InventorySearch from './InventorySearch';
import { EventFormData } from '../../../../../types/event';

interface InventoryStepProps {
  data: Partial<EventFormData>;
  errors?: Record<string, string>;
  onChange: (field: keyof EventFormData, value: any) => void;
}

export default function InventoryStep({
  data,
  errors,
  onChange,
}: InventoryStepProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">Event Inventory</Typography>
        
        <div className="space-y-6">
          <InventorySearch
            onSearch={(query) => console.log('Search:', query)}
          />

          <InventoryItemList
            selectedItems={data.inventoryItems || []}
            onItemsChange={(items) => onChange('inventoryItems', items)}
            error={errors?.inventoryItems}
          />

          {errors?.inventoryItems && (
            <p className="text-sm text-red-500">{errors.inventoryItems}</p>
          )}
        </div>
      </div>
    </Card>
  );
}