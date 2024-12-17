import { useState } from 'react';
import { TaskFormData } from '../types/logistics-forms';

const INITIAL_FORM_DATA: TaskFormData = {
  name: '',
  description: '',
  priority: 'medium',
  dueDate: '',
  dueTime: '',
  assigneeId: '',
  notifyOnComplete: true,
};

export function useTaskForm(initialData: Partial<TaskFormData> = {}) {
  const [formData, setFormData] = useState<TaskFormData>({
    ...INITIAL_FORM_DATA,
    ...initialData,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Task name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.assigneeId) {
      newErrors.assigneeId = 'Please select an assignee';
    }

    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    }

    if (!formData.dueTime) {
      newErrors.dueTime = 'Due time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: keyof TaskFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return {
    formData,
    errors,
    validateForm,
    handleChange,
  };
}