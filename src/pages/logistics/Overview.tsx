import React from 'react';
import { Link } from '@tanstack/react-router';
import { ClipboardList, AlertTriangle, CheckCircle, Plus } from 'lucide-react';
import { KPICard } from '../../components/logistics';
import TaskStatusSummary from '../../components/logistics/TaskStatusSummary';
import TasksTable from '../../components/logistics/TasksTable';
import Button from '../../components/ui/Button';

export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Logistics Overview</h1>
        <Link to="/logistics/tasks/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Task
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          value="03"
          label="Tasks Due Today"
          icon={<ClipboardList className="w-6 h-6 text-orange-500" />}
          trend={{ value: 12, isPositive: true }}
        />
        <KPICard
          value="05"
          label="Overdue Tasks"
          icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
          trend={{ value: 8, isPositive: false }}
        />
        <KPICard
          value="44"
          label="Open Tasks"
          icon={<CheckCircle className="w-6 h-6 text-green-500" />}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <TaskStatusSummary />
        <div className="lg:col-span-3">
          <TasksTable />
        </div>
      </div>
    </div>
  );
}