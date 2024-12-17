import React from 'react';
import { Card } from '../ui/Card';
import { ReportMetric } from '../../types/reports';

interface MetricCardProps {
  metric: ReportMetric;
  icon: React.ReactNode;
  isLoading?: boolean;
}

export default function MetricCard({ metric, icon, isLoading }: MetricCardProps) {
  if (isLoading) {
    return (
      <Card>
        <div className="p-6 animate-pulse">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg" />
            <div className="flex-1">
              <div className="h-8 bg-gray-200 rounded w-24 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            {icon}
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {typeof metric.value === 'number' && metric.value < 100 
                ? `${metric.value}%` 
                : metric.value}
            </div>
            <div className="text-sm text-gray-600">{metric.description}</div>
            {metric.trend && (
              <div className={`text-sm mt-2 flex items-center gap-1 ${
                metric.trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend.isPositive ? '↑' : '↓'} {metric.trend.value}%
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}