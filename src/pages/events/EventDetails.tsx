import React, { useState } from 'react';
import { useParams } from '@tanstack/react-router';
import Breadcrumb from '../../components/Breadcrumb';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import StatusBadge from '../../components/ui/StatusBadge';
import ActionButtons from '../../components/ui/ActionButtons';
import { Eye, Edit2, Copy, Trash2 } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Event Details' },
];

const tabs = [
  'Logistics Plan',
  'Inventory',
  'Assigned Personnel',
  'Documents'
] as const;

type Tab = typeof tabs[number];

export default function EventDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<Tab>('Logistics Plan');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Annual Tech Conference</h1>
              <StatusBadge status="upcoming" />
            </div>
            <div className="flex items-center gap-2">
              <ActionButtons
                onView={() => console.log('View')}
                onEdit={() => console.log('Edit')}
                onDelete={() => console.log('Delete')}
              />
            </div>
          </div>
          <div className="flex items-center gap-8 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium border-b-2 ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Logistics Plan</h2>
              </CardHeader>
              <CardContent>
                {/* Task list would go here */}
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">Setup Conference Room</h3>
                    <p className="text-sm text-gray-600 mt-1">Assigned to: Robert Steve</p>
                    <p className="text-sm text-gray-500">Due: March 15, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Event Summary</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                    <p className="mt-1 text-gray-900">March 15, 2024, 9:00 AM</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="mt-1 text-gray-900">181 Mercer Street, New York, NY 10012</p>
                    <button className="mt-2 text-sm text-orange-500 hover:text-orange-600">
                      View Location on Map
                    </button>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Contact Person</h3>
                    <p className="mt-1 text-gray-900">Sherwyn Graham</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Activity Feed</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500" />
                    <div>
                      <p className="text-sm text-gray-900">
                        Sherwyn Graham assigned a task to Robert Steve
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}