import React from 'react';
import { EventFormData, EventType } from '../../types/event';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const EVENT_TYPES: { value: EventType; label: string }[] = [
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'exhibition', label: 'Exhibition' },
  { value: 'other', label: 'Other' },
];

interface CreateEventFormProps {
  data: EventFormData;
  errors?: Partial<Record<keyof EventFormData, string>>;
  onChange: (data: EventFormData) => void;
  onSave: () => void;
  onSaveAsDraft: () => void;
}

export default function CreateEventForm({
  data,
  errors,
  onChange,
  onSave,
  onSaveAsDraft,
}: CreateEventFormProps) {
  const handleChange = (
    name: keyof EventFormData,
    value: string
  ) => {
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={onSaveAsDraft}
        >
          Save as Draft
        </Button>
      </div>

      <div className="space-y-6">
        <Input
          label="Event Name"
          id="name"
          value={data.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors?.name}
          required
        />

        <Select
          label="Event Type"
          id="type"
          value={data.type}
          onChange={(e) => handleChange('type', e.target.value as EventType)}
          options={EVENT_TYPES}
          error={errors?.type}
          required
        />

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            <span className="text-red-500 mr-1">*</span>
            Description
          </label>
          <textarea
            id="description"
            value={data.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[150px]"
            required
          />
          {errors?.description && (
            <p className="text-sm text-red-500">{errors.description}</p>
          )}
          <p className="text-sm text-gray-500">
            Minimum 50 characters required
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="secondary"
            disabled
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={onSave}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}