import React from 'react';
import { InventoryAlert, AlertTriggerType, NotificationChannel } from '../../../types/inventory';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';

interface AlertFormProps {
  data: Partial<InventoryAlert>;
  onSubmit: (data: Partial<InventoryAlert>) => void;
  onCancel: () => void;
}

const TRIGGER_TYPES = [
  { value: 'low-stock', label: 'Low Stock' },
  { value: 'expiring', label: 'Expiring Items' },
  { value: 'custom', label: 'Custom Trigger' },
];

const NOTIFICATION_CHANNELS = [
  { value: 'email', label: 'Email' },
  { value: 'push', label: 'Push Notification' },
  { value: 'sms', label: 'SMS' },
];

const FREQUENCIES = [
  { value: 'immediate', label: 'Immediate' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
];

export default function AlertForm({ data, onSubmit, onCancel }: AlertFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Alert Name"
        value={data.name || ''}
        onChange={(e) => onSubmit({ ...data, name: e.target.value })}
        required
      />

      <Select
        label="Trigger Type"
        value={data.triggerType || ''}
        onChange={(e) => onSubmit({ ...data, triggerType: e.target.value as AlertTriggerType })}
        options={TRIGGER_TYPES}
        required
      />

      <Input
        label="Trigger Value"
        value={data.triggerValue || ''}
        onChange={(e) => onSubmit({ ...data, triggerValue: e.target.value })}
        placeholder={data.triggerType === 'low-stock' ? 'e.g., < 10 items' : ''}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notification Channels
        </label>
        <div className="space-y-2">
          {NOTIFICATION_CHANNELS.map((channel) => (
            <label key={channel.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={data.notificationChannels?.includes(channel.value as NotificationChannel)}
                onChange={(e) => {
                  const channels = data.notificationChannels || [];
                  onSubmit({
                    ...data,
                    notificationChannels: e.target.checked
                      ? [...channels, channel.value as NotificationChannel]
                      : channels.filter((c) => c !== channel.value),
                  });
                }}
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-700">{channel.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Select
        label="Alert Frequency"
        value={data.frequency || ''}
        onChange={(e) => onSubmit({ ...data, frequency: e.target.value as any })}
        options={FREQUENCIES}
        required
      />

      <div className="flex justify-end gap-4 pt-6">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save Alert
        </Button>
      </div>
    </form>
  );
}