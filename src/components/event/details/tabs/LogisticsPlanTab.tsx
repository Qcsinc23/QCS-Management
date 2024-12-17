import React from 'react';
import { Card } from '../../../ui/Card';
import Typography from '../../../ui/Typography';

interface Task {
  id: string;
  name: string;
  assignee: string;
  dueDate: string;
  status: string;
}

interface LogisticsPlanTabProps {
  tasks: Task[];
}

export default function LogisticsPlanTab({ tasks }: LogisticsPlanTabProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-4">Logistics Plan</Typography>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 bg-gray-50 rounded-lg">
              <Typography variant="h3">{task.name}</Typography>
              <Typography variant="body" className="text-gray-600 mt-1">
                Assigned to: {task.assignee}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                Due: {task.dueDate}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}