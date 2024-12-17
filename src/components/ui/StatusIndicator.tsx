import React from 'react';
import { getStatusColor } from '../../utils/styles';

interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'error' | 'info';
  label: string;
  size?: 'sm' | 'md';
}

export default function StatusIndicator({ 
  status, 
  label,
  size = 'md' 
}: StatusIndicatorProps) {
  const color = getStatusColor(status);
  const dotSize = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${dotSize} rounded-full`}
        style={{ backgroundColor: color }}
        role="status"
        aria-label={`Status: ${label}`}
      />
      <span className={`text-${size === 'sm' ? 'sm' : 'base'} text-gray-600`}>
        {label}
      </span>
    </div>
  );
}