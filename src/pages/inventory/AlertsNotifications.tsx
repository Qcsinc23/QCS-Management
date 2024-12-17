import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { AlertsList } from '../../components/inventory';
import Button from '../../components/ui/Button';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Alerts & Notifications' },
];

export default function AlertsNotifications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex gap-4">
              <Button variant="outline">Manage Alerts</Button>
              <Button variant="primary">Create Alert</Button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Alerts & Notifications</h1>
        </div>
      </header>

      <main className="p-8">
        <AlertsList />
      </main>
    </div>
  );
}