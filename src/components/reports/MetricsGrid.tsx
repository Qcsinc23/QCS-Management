import React from 'react';
import { Calendar, TrendingUp, Package, Users } from 'lucide-react';
import MetricCard from './MetricCard';
import { ReportMetric } from '../../types/reports';

interface MetricsGridProps {
  isLoading?: boolean;
}

const sampleMetrics: ReportMetric[] = [
  {
    id: '1',
    type: 'events',
    label: 'Events Summary',
    value: 158,
    trend: { value: 12, isPositive: true },
    description: 'Total events this month',
  },
  {
    id: '2',
    type: 'delivery',
    label: 'Delivery Performance',
    value: 95,
    trend: { value: 5, isPositive: true },
    description: 'On-time delivery rate',
  },
  {
    id: '3',
    type: 'inventory',
    label: 'Inventory Metrics',
    value: 82,
    trend: { value: 3, isPositive: false },
    description: 'Stock availability rate',
  },
  {
    id: '4',
    type: 'users',
    label: 'User Activity',
    value: 423,
    trend: { value: 15, isPositive: true },
    description: 'Active users this week',
  },
];

const metricIcons = {
  events: Calendar,
  delivery: TrendingUp,
  inventory: Package,
  users: Users,
};

export default function MetricsGrid({ isLoading }: MetricsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg" />
              <div className="flex-1">
                <div className="h-8 bg-gray-200 rounded w-24 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sampleMetrics.map((metric) => {
        const Icon = metricIcons[metric.type];
        return (
          <MetricCard
            key={metric.id}
            metric={metric}
            icon={<Icon className="w-6 h-6" />}
          />
        );
      })}
    </div>
  );
}