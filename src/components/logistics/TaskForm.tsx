import React from 'react';
import { Upload, Plus } from 'lucide-react';
import { TaskFormData } from '../../types/logistics-forms';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

interface TaskFormProps {
  data: TaskFormData;
  errors?: Record<string, string>;
  onChange: (name: keyof TaskFormData, value: string | boolean) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const PRIORITY_OPTIONS = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export default function TaskForm({
  data,
  errors,
  onChange,
  onSubmit,
  onCancel,
}: TaskFormProps) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }} className="space-y-6">
      <Input
        label="Task Name"
        id="name"
        value={data.name}
        onChange={(e) => onChange('name', e.target.value)}
        error={errors?.name}
        required
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={data.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Priority Level"
          id="priority"
          value={data.priority}
          onChange={(e) => onChange('priority', e.target.value)}
          options={PRIORITY_OPTIONS}
          required
        />

        <Select
          label="Assignee"
          id="assigneeId"
          value={data.assigneeId}
          onChange={(e) => onChange('assigneeId', e.target.value)}
          options={[
            { value: '', label: 'Select assignee' },
            { value: '1', label: 'John Smith' },
            { value: '2', label: 'Sarah Johnson' },
          ]}
          error={errors?.assigneeId}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="date"
          label="Due Date"
          id="dueDate"
          value={data.dueDate}
          onChange={(e) => onChange('dueDate', e.target.value)}
          error={errors?.dueDate}
          required
        />

        <Input
          type="time"
          label="Due Time"
          id="dueTime"
          value={data.dueTime}
          onChange={(e) => onChange('dueTime', e.target.value)}
          error={errors?.dueTime}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Attachments
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Drag and drop files here, or{' '}
            <button type="button" className="text-orange-500 hover:text-orange-600">
              browse
            </button>
          </p>
        </div>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
      >
        <Plus className="w-4 h-4" />
        <span>Add Sub-task</span>
      </button>

      <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Create Task
        </Button>
      </div>
    </form>
  );
}