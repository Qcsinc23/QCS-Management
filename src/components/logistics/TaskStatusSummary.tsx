import React from 'react';
import { Card } from '../ui/Card';

const statuses = [
  { label: 'Upcoming', count: 12, color: 'bg-green-500' },
  { label: 'Not Started', count: 8, color: 'bg-gray-400' },
  { label: 'Ongoing', count: 15, color: 'bg-orange-500' },
  { label: 'Cancelled', count: 3, color: 'bg-red-500' },
];

export default function TaskStatusSummary() {
  const total = statuses.reduce((sum, status) => sum + status.count, 0);

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tasks by Status</h2>
        <div className="space-y-4">
          {statuses.map((status) => (
            <div key={status.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${status.color}`} />
                <span className="text-sm text-gray-600">{status.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {status.count}
                </span>
                <span className="text-xs text-gray-500">
                  ({Math.round((status.count / total) * 100)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}