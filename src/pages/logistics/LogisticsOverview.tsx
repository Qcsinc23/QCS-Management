import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { KPICard, TasksTable, TaskStatusSummary } from '../../components/logistics';
import { ClipboardList, AlertTriangle, CheckCircle } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Logistics', href: '/logistics' },
  { label: 'Overview' },
];

export default function LogisticsOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-2xl font-bold text-gray-900 mt-6">Logistics Overview</h1>
        </div>
      </header>

      <main className="p-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            value="03"
            label="Tasks Due Today"
            icon={<ClipboardList className="w-6 h-6 text-orange-500" />}
          />
          <KPICard
            value="05"
            label="Over Due Tasks"
            icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
          />
          <KPICard
            value="44"
            label="Open Tasks"
            icon={<CheckCircle className="w-6 h-6 text-green-500" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tasks Status Summary */}
          <TaskStatusSummary />

          {/* Tasks Table */}
          <div className="lg:col-span-3">
            <TasksTable />
          </div>
        </div>
      </main>
    </div>
  );
}