import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Mail, MessageSquare, Bell } from 'lucide-react';
import Button from '../../../components/ui/Button';
import { notifications } from '../../../utils/notifications';

export default function NotificationSettings() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      notifications.success('Notification preferences saved successfully');
    } catch (error) {
      notifications.error('Failed to save notification preferences');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Email Notifications</h2>
            <Button variant="primary" onClick={handleSave} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Event Updates</div>
                <div className="text-sm text-gray-500">Receive notifications about event changes and updates</div>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Delivery Status</div>
                <div className="text-sm text-gray-500">Get notified about delivery status changes</div>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Task Assignments</div>
                <div className="text-sm text-gray-500">Notifications when tasks are assigned to you</div>
              </div>
            </label>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Push Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Desktop Notifications</div>
                <div className="text-sm text-gray-500">Show desktop notifications when browser is open</div>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Mobile Push Notifications</div>
                <div className="text-sm text-gray-500">Receive notifications on your mobile device</div>
              </div>
            </label>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">SMS Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Critical Alerts</div>
                <div className="text-sm text-gray-500">Receive SMS for urgent notifications</div>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Delivery Updates</div>
                <div className="text-sm text-gray-500">Get SMS updates for delivery status changes</div>
              </div>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}