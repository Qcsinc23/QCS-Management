import React from 'react';
import { MapPin } from 'lucide-react';
import { Card } from '../../../ui/Card';
import Input from '../../../ui/Input';
import Typography from '../../../ui/Typography';
import { EventFormData } from '../../../../types/event';

interface LocationStepProps {
  data: Partial<EventFormData>;
  errors?: Record<string, string>;
  onChange: (field: keyof EventFormData, value: string) => void;
}

export default function LocationStep({
  data,
  errors,
  onChange,
}: LocationStepProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">Event Location</Typography>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input
                label="Venue Name"
                value={data.venueName || ''}
                onChange={(e) => onChange('venueName', e.target.value)}
                error={errors?.venueName}
                required
              />
            </div>

            <div className="md:col-span-2">
              <Input
                label="Street Address"
                value={data.streetAddress || ''}
                onChange={(e) => onChange('streetAddress', e.target.value)}
                error={errors?.streetAddress}
                required
              />
            </div>

            <Input
              label="City"
              value={data.city || ''}
              onChange={(e) => onChange('city', e.target.value)}
              error={errors?.city}
              required
            />

            <Input
              label="State/Province"
              value={data.state || ''}
              onChange={(e) => onChange('state', e.target.value)}
              error={errors?.state}
              required
            />

            <Input
              label="Postal Code"
              value={data.postalCode || ''}
              onChange={(e) => onChange('postalCode', e.target.value)}
              error={errors?.postalCode}
              required
            />

            <Input
              label="Country"
              value={data.country || ''}
              onChange={(e) => onChange('country', e.target.value)}
              error={errors?.country}
              required
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-1">Location Verification</p>
              <p>
                Please ensure the address is accurate and complete. This will be used
                for navigation and delivery planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}