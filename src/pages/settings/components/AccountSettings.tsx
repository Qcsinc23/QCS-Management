import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { notifications } from '../../../utils/notifications';

export default function AccountSettings() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      notifications.success('Account settings saved successfully');
    } catch (error) {
      notifications.error('Failed to save account settings');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            <Button variant="primary" onClick={handleSave} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                defaultValue="John"
                required
              />
              <Input
                label="Last Name"
                defaultValue="Smith"
                required
              />
            </div>
            <Input
              label="Email Address"
              type="email"
              defaultValue="john@example.com"
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              defaultValue="+1 234 567 890"
            />
          </div>
        </div>
      </Card>

      {/* ... rest of the component remains the same ... */}
    </div>
  );
}