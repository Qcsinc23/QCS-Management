import React from 'react';
import { Task } from '../types/task';
import TaskListItem from './TaskListItem';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-900 p-6 border-b border-gray-100">
        Task Assignments
      </h2>
      <div className="divide-y divide-gray-100">
        {tasks.map((task, index) => (
          <TaskListItem key={index} task={task} />
        ))}
      </div>
    </div>
  );
}