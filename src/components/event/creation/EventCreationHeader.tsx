import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import Breadcrumb from '../../Breadcrumb';
import Button from '../../ui/Button';
import Typography from '../../ui/Typography';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Create New Event' },
];

interface EventCreationHeaderProps {
  onSaveAsDraft: () => void;
}

export default function EventCreationHeader({ onSaveAsDraft }: EventCreationHeaderProps) {
  return (
    <div className="px-8 py-6 border-b border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <Breadcrumb items={breadcrumbItems} />
        <Button variant="outline" onClick={onSaveAsDraft}>
          Save as Draft
        </Button>
      </div>
      <Typography variant="h1" className="mb-8">Create New Event</Typography>
    </div>
  );
}