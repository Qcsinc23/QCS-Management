import React from 'react';
import Table from '../ui/Table';
import StatusBadge from '../ui/StatusBadge';
import ActionButtons from '../ui/ActionButtons';
import { Task } from '../../types/logistics';

const columns = [
  { key: 'name', header: 'Task Name' },
  { key: 'assignee', header: 'Assignee' },
  { key: 'relatedEvent', header: 'Related Event' },
  {
    key: 'priority',
    header: 'Priority',
    render: (priority: string) => (
      <span className={`
        px-2 py-1 rounded-full text-xs font-medium
        ${priority === 'high' ? 'bg-red-100 text-red-800' :
          priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'}
      `}>
        {priority}
      </span>
    ),
  },
  { key: 'dueDate', header: 'Due Date' },
  {
    key: 'status',
    header: 'Status',
    render: (status: string) => <StatusBadge status={status} />,
  },
  {
    key: 'actions',
    header: '',
    render: (task: Task) => (
      <ActionButtons
        onView={() => console.log('View', task)}
        onEdit={() => console.log('Edit', task)}
        onDelete={() => console.log('Delete', task)}
      />
    ),
  },
];

// Sample data - in a real app, this would come from an API
const sampleTasks: Task[] = [
  {
    id: '1',
    name: 'Setup Conference Room',
    assignee: 'Robert Steve',
    relatedEvent: 'Annual Tech Conference',
    priority: 'high',
    dueDate: '2024-03-15',
    status: 'ongoing',
  },
  {
    id: '2',
    name: 'Coordinate with Vendors',
    assignee: 'Sarah Johnson',
    relatedEvent: 'Product Launch',
    priority: 'medium',
    dueDate: '2024-03-18',
    status: 'pending',
  },
];

export default function TasksTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Tasks</h2>
      </div>
      <Table
        columns={columns}
        data={sampleTasks}
        onRowClick={(task) => console.log('Clicked task:', task)}
      />
    </div>
  );
}