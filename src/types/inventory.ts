// Core inventory types
export type InventoryStatus = 'in-stock' | 'low-stock' | 'out-of-stock';
export type AlertTriggerType = 'low-stock' | 'expiring' | 'custom';
export type NotificationChannel = 'email' | 'push' | 'sms';
export type AlertFrequency = 'immediate' | 'daily' | 'weekly';

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  thumbnail?: string;
  category: string;
  supplier: string;
  availableQty: number;
  reservedQty: number;
  minimumQty: number;
  location: string;
  status: InventoryStatus;
  lastUpdated: Date;
}

export interface InventoryAlert {
  id: string;
  name: string;
  triggerType: AlertTriggerType;
  triggerValue: string;
  notificationChannels: NotificationChannel[];
  frequency: AlertFrequency;
  isActive: boolean;
}

export interface InventoryFilters {
  search?: string;
  categories?: string[];
  suppliers?: string[];
  location?: string;
  status?: InventoryStatus;
  dateRange?: {
    start: Date;
    end: Date;
  };
}