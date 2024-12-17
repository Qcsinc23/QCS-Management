import React from 'react';
import { Card } from '../../../../ui/Card';
import Typography from '../../../../ui/Typography';
import DocumentUpload from './DocumentUpload';
import DocumentList from './DocumentList';
import { EventFormData } from '../../../../../types/event';

interface DocumentsStepProps {
  data: Partial<EventFormData>;
  errors?: Record<string, string>;
  onChange: (field: keyof EventFormData, value: any) => void;
}

export default function DocumentsStep({
  data,
  errors,
  onChange,
}: DocumentsStepProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">Event Documents</Typography>
        
        <div className="space-y-8">
          <DocumentUpload
            onUpload={(files) => {
              const newDocs = [...(data.documents || []), ...files];
              onChange('documents', newDocs);
            }}
          />

          <DocumentList
            documents={data.documents || []}
            onDocumentsChange={(docs) => onChange('documents', docs)}
            error={errors?.documents}
          />

          {errors?.documents && (
            <p className="text-sm text-red-500">{errors.documents}</p>
          )}
        </div>
      </div>
    </Card>
  );
}