import React from 'react';
import { Bell, MoreVertical } from 'lucide-react';
import { Card } from '../../ui/Card';
import { InventoryAlert } from '../../../types/inventory';

interface AlertCardProps {
  alert: InventoryAlert;
  onToggle: (id: string, isActive: boolean) => void;
  onEdit: (alert: InventoryAlert) => void;
  onDelete: (id: string) => void;
}

export default function AlertCard({
  alert,
  onToggle,
  onEdit,
  onDelete,
}: AlertCardProps) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Bell className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{alert.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Trigger: {alert.triggerValue}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {alert.notificationChannels.map((channel) => (
                  <span
                    key={channel}
                    className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 capitalize"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={alert.isActive}
                onChange={(e) => onToggle(alert.id, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
            </label>

            <div className="relative">
              <button
                onClick={() => {}}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}