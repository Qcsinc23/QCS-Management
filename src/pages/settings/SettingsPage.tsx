import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SettingsTabs from './components/SettingsTabs';
import AccountSettings from './components/AccountSettings';
import NotificationSettings from './components/NotificationSettings';
import SystemPreferences from './components/SystemPreferences';
import IntegrationSettings from './components/IntegrationSettings';
import BillingSettings from './components/BillingSettings';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Settings' },
];

type SettingsTab = 'account' | 'notifications' | 'preferences' | 'integrations' | 'billing';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'preferences':
        return <SystemPreferences />;
      case 'integrations':
        return <IntegrationSettings />;
      case 'billing':
        return <BillingSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-2xl font-bold text-gray-900 mt-6">Application Settings</h1>
          <p className="text-sm text-gray-600 mt-2">
            Manage your account preferences, notification settings, and system configurations
          </p>
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
}