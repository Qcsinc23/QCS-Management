import React from 'react';
import { Package, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { Card } from '../../ui/Card';
import { DeliveryStatusType } from '../../../types/delivery';

interface StatusSummaryCardProps {
  status: DeliveryStatusType;
  count: number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const STATUS_CONFIG = {
  'in-transit': {
    label: 'In Transit',
    icon: Package,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
  },
  'delivered': {
    label: 'Delivered',
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  'delayed': {
    label: 'Delayed',
    icon: AlertTriangle,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  'cancelled': {
    label: 'Cancelled',
    icon: Clock,
    color: 'text-gray-500',
    bgColor: 'bg-gray-100',
  },
};

export default function StatusSummaryCard({ status, count, trend }: StatusSummaryCardProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${config.bgColor}`}>
            <Icon className={`w-6 h-6 ${config.color}`} />
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{count}</div>
            <div className="text-sm text-gray-600">{config.label}</div>
            {trend && (
              <div className={`text-sm mt-2 flex items-center gap-1 ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.isPositive ? '↑' : '↓'} {trend.value}%
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}