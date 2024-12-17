import React from 'react';
import { X } from 'lucide-react';
import { Card } from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterPanel({ isOpen, onClose }: FilterPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-4 left-4 w-full max-w-sm">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter Map</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <Input
              type="date"
              label="Date"
            />
            
            <Select
              label="Driver"
              options={[
                { value: '', label: 'All Drivers' },
                { value: '1', label: 'John Smith' },
                { value: '2', label: 'Sarah Johnson' },
              ]}
            />

            <Select
              label="Status"
              options={[
                { value: '', label: 'All Status' },
                { value: 'active', label: 'Active' },
                { value: 'idle', label: 'Idle' },
                { value: 'stopped', label: 'Stopped' },
              ]}
            />

            <div className="flex justify-end">
              <Button variant="primary" onClick={onClose}>
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}