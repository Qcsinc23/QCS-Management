// Update the existing delivery.ts file to include the status types
export type DeliveryStatusType = 'in-transit' | 'delivered' | 'delayed' | 'cancelled';

export interface DeliveryStatusSummary {
  status: DeliveryStatusType;
  count: number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

// Keep other existing types...