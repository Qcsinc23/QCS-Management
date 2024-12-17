import React from 'react';
import { cn } from '../utils/cn';

interface StatCardProps {
  value: string;
  label: string;
  isHighlighted?: boolean;
  icon?: React.ReactNode;
}

export default function StatCard({ value, label, isHighlighted, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-3 bg-gray-50 rounded-lg">
            {icon}
          </div>
        )}
        <div>
          <div className={cn(
            'text-3xl font-bold mb-2',
            isHighlighted ? 'text-orange-500' : 'text-gray-900'
          )}>
            {value}
          </div>
          <div className="text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}