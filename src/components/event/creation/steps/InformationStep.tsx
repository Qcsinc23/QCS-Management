import React from 'react';
import { Card } from '../../../ui/Card';
import Input from '../../../ui/Input';
import Select from '../../../ui/Select';
import Typography from '../../../ui/Typography';
import { EventFormData } from '../../../../types/event';

interface InformationStepProps {
  data: EventFormData;
  errors?: Record<string, string>;
  onChange: (field: keyof EventFormData, value: string) => void;
}

const EVENT_TYPES = [
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'exhibition', label: 'Exhibition' },
  { value: 'other', label: 'Other' },
];

export default function InformationStep({
  data,
  errors,
  onChange,
}: InformationStepProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">Basic Information</Typography>
        
        <div className="space-y-6">
          <Input
            label="Event Name"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
            error={errors?.name}
            required
          />

          <Select
            label="Event Type"
            value={data.type}
            onChange={(e) => onChange('type', e.target.value)}
            options={EVENT_TYPES}
            error={errors?.type}
            required
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500 mr-1">*</span>
              Description
            </label>
            <textarea
              value={data.description}
              onChange={(e) => onChange('description', e.target.value)}
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
        </div>
      </div>
    </Card>
  );
}