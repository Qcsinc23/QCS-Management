import React from 'react';
import { Task } from '../types/task';

interface TaskListItemProps {
  task: Task;
}

export default function TaskListItem({ task }: TaskListItemProps) {
  return (
    <div className="p-6 flex items-center justify-between">
      <div>
        <h3 className="font-medium text-gray-900 mb-1">{task.name}</h3>
        <p className="text-sm text-gray-600">{task.assignee}</p>
        <p className="text-sm text-gray-500 mt-1">Due: {task.dueDate}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-gray-600">{task.status}</span>
        </div>
        <span className="font-medium text-gray-900">{task.progress}%</span>
      </div>
    </div>
  );
}