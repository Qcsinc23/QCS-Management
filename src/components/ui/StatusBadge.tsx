import React from 'react';
import { cn } from '../../utils/cn';
import { StatusType, getStatusColor } from '../../utils/status';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          'w-2 h-2 rounded-full',
          `bg-[${getStatusColor(status)}]`
        )}
      />
      <span className={cn('text-sm text-gray-600 capitalize', className)}>
        {status}
      </span>
    </div>
  );
}