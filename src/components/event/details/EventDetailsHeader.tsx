import React from 'react';
import { ArrowLeft, Copy, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import StatusIndicator from '../../ui/StatusIndicator';
import Typography from '../../ui/Typography';
import Button from '../../ui/Button';

interface EventDetailsHeaderProps {
  title: string;
  status: 'success' | 'warning' | 'error' | 'info';
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export default function EventDetailsHeader({
  title,
  status,
  onEdit,
  onDuplicate,
  onDelete,
}: EventDetailsHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="px-8 py-6 border-b border-gray-200">
      <button
        onClick={() => navigate({ to: '/events' })}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Events</span>
      </button>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Typography variant="h1">{title}</Typography>
          <StatusIndicator status={status} label={status} />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onEdit}>
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" onClick={onDuplicate}>
            <Copy className="w-4 h-4 mr-2" />
            Duplicate
          </Button>
          <Button variant="outline" onClick={onDelete}>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}