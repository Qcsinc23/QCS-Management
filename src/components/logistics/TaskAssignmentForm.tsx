import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { Plus, Upload } from 'lucide-react';

export default function TaskAssignmentForm() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-gray-900">Task Details</h2>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <Input
            label="Task Name"
            required
            placeholder="Enter task name"
          />

          <Select
            label="Related Event"
            required
            options={[
              { value: '', label: 'Select an event' },
              { value: '1', label: 'Annual Tech Conference' },
              { value: '2', label: 'Product Launch' },
            ]}
          />

          <Input
            label="Description"
            required
            as="textarea"
            rows={4}
            placeholder="Enter task description"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Priority Level"
              required
              options={[
                { value: '', label: 'Select priority' },
                { value: 'high', label: 'High' },
                { value: 'medium', label: 'Medium' },
                { value: 'low', label: 'Low' },
              ]}
            />

            <Input
              type="datetime-local"
              label="Due Date & Time"
              required
            />
          </div>

          <Select
            label="Assigned To"
            required
            options={[
              { value: '', label: 'Select assignee' },
              { value: '1', label: 'Robert Steve' },
              { value: '2', label: 'Sarah Johnson' },
            ]}
          />

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

          <div>
            <button
              type="button"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
            >
              <Plus className="w-4 h-4" />
              <span>Add Sub-task</span>
            </button>
          </div>

          <div className="flex items-center gap-4 justify-end pt-6 border-t border-gray-200">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save Task</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}