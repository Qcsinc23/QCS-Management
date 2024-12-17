import React from 'react';
import { Card } from '../../../ui/Card';
import Input from '../../../ui/Input';
import Typography from '../../../ui/Typography';
import { EventFormData } from '../../../../types/event';

interface DateStepProps {
  data: Partial<EventFormData>;
  errors?: Record<string, string>;
  onChange: (field: keyof EventFormData, value: string) => void;
}

export default function DateStep({
  data,
  errors,
  onChange,
}: DateStepProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">Event Schedule</Typography>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="date"
              label="Start Date"
              value={data.startDate || ''}
              onChange={(e) => onChange('startDate', e.target.value)}
              error={errors?.startDate}
              required
            />
            
            <Input
              type="time"
              label="Start Time"
              value={data.startTime || ''}
              onChange={(e) => onChange('startTime', e.target.value)}
              error={errors?.startTime}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="date"
              label="End Date"
              value={data.endDate || ''}
              onChange={(e) => onChange('endDate', e.target.value)}
              error={errors?.endDate}
              required
            />
            
            <Input
              type="time"
              label="End Time"
              value={data.endTime || ''}
              onChange={(e) => onChange('endTime', e.target.value)}
              error={errors?.endTime}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Time Zone
            </label>
            <select
              value={data.timeZone || ''}
              onChange={(e) => onChange('timeZone', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Select time zone</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/Denver">Mountain Time (MT)</option>
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
            </select>
            {errors?.timeZone && (
              <p className="text-sm text-red-500">{errors.timeZone}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}