import React from 'react';
import { Card } from '../../components/ui/Card';
import TaskForm from '../../components/logistics/TaskForm';
import { useTaskForm } from '../../hooks/useTaskForm';
import { notifications } from '../../utils/notifications';

export default function TaskAssignment() {
  const {
    formData,
    errors,
    validateForm,
    handleChange,
  } = useTaskForm();

  const handleSubmit = () => {
    if (validateForm()) {
      // In a real app, this would save to an API
      notifications.success('Task created successfully');
      console.log('Task data:', formData);
    }
  };

  const handleCancel = () => {
    // Navigate back or clear form
    console.log('Canceling task creation');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Task</h1>
      
      <Card>
        <div className="p-6">
          <TaskForm
            data={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      </Card>
    </div>
  );
}