import React from 'react';
import { cn } from '../../utils/cn';

interface KPICardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  isHighlighted?: boolean;
  className?: string;
}

export default function KPICard({
  value,
  label,
  icon,
  trend,
  isHighlighted,
  className,
}: KPICardProps) {
  return (
    <div className={cn(
      'bg-white rounded-xl p-6 shadow-sm',
      className
    )}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-3 bg-gray-50 rounded-lg">
            {icon}
          </div>
        )}
        <div>
          <div className={cn(
            'text-3xl font-bold mb-1',
            isHighlighted ? 'text-orange-500' : 'text-gray-900'
          )}>
            {value}
          </div>
          <div className="text-sm text-gray-600">{label}</div>
          {trend && (
            <div className={cn(
              'text-sm mt-2 flex items-center gap-1',
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            )}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}