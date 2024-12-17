import React from 'react';
import { Card } from '../../ui/Card';
import Typography from '../../ui/Typography';

interface FormStepWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function FormStepWrapper({ title, children }: FormStepWrapperProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">{title}</Typography>
        {children}
      </div>
    </Card>
  );
}