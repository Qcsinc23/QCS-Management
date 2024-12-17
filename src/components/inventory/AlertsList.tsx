import React from 'react';
import { Bell } from 'lucide-react';
import { Card } from '../ui/Card';
import { InventoryAlert } from '../../types/inventory';

const sampleAlerts: InventoryAlert[] = [
  {
    id: '1',
    name: 'Low Stock Alert',
    triggerType: 'low-stock',
    triggerValue: '< 10 items',
    notificationChannels: ['email', 'push'],
    frequency: 'immediate',
    isActive: true,
  },
  {
    id: '2',
    name: 'Weekly Stock Report',
    triggerType: 'custom',
    triggerValue: 'Weekly summary',
    notificationChannels: ['email'],
    frequency: 'weekly',
    isActive: true,
  },
];

export default function AlertsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleAlerts.map((alert) => (
        <Card key={alert.id}>
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
                        className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={alert.isActive}
                  className="sr-only peer"
                  onChange={() => {}}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
              </label>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}