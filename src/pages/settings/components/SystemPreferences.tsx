import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Moon, Monitor, Globe, Sun } from 'lucide-react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { notifications } from '../../../utils/notifications';

export default function SystemPreferences() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      notifications.success('System preferences saved successfully');
    } catch (error) {
      notifications.error('Failed to save system preferences');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Interface Settings</h2>
            <Button variant="primary" onClick={handleSave} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <div className="grid grid-cols-3 gap-4">
                <button className="p-4 border rounded-lg text-center hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <Monitor className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                  <span className="text-sm text-gray-600">System</span>
                </button>
                <button className="p-4 border rounded-lg text-center hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <Moon className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                  <span className="text-sm text-gray-600">Dark</span>
                </button>
                <button className="p-4 border rounded-lg text-center hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <Sun className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                  <span className="text-sm text-gray-600">Light</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <Select
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Español' },
                  { value: 'fr', label: 'Français' },
                ]}
                defaultValue="en"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <Select
                options={[
                  { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
                  { value: 'America/New_York', label: 'Eastern Time (ET)' },
                  { value: 'America/Chicago', label: 'Central Time (CT)' },
                  { value: 'America/Denver', label: 'Mountain Time (MT)' },
                  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
                ]}
                defaultValue="UTC"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
              <Select
                options={[
                  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
                  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
                  { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
                ]}
                defaultValue="MM/DD/YYYY"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Enable Animations</div>
                <div className="text-sm text-gray-500">Show animations and transitions</div>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <div>
                <div className="font-medium text-gray-900">Auto-refresh Data</div>
                <div className="text-sm text-gray-500">Automatically update data in real-time</div>
              </div>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}