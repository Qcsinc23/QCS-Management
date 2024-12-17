import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import Breadcrumb from '../../components/Breadcrumb';
import { Card, CardContent } from '../../components/ui/Card';
import CreateEventForm from '../../components/event/CreateEventForm';
import StepIndicator, { EventCreationStep } from '../../components/event/StepIndicator';
import { EventFormData } from '../../types/event';
import { useEventForm } from '../../hooks/useEventForm';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Create New Event' },
];

export default function CreateEvent() {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    validateForm,
    handleChange,
  } = useEventForm();

  const handleSaveAsDraft = () => {
    // In a real app, this would save to an API
    console.log('Saving as draft:', formData);
  };

  const handleSave = () => {
    if (validateForm()) {
      // In a real app, this would save to an API and move to the next step
      console.log('Saving and continuing:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-8">
            Create New Event
          </h1>
          <StepIndicator
            currentStep="information"
            completedSteps={[]}
          />
        </div>
      </header>

      <main className="p-8 max-w-3xl mx-auto">
        <Card>
          <CardContent>
            <CreateEventForm
              data={formData}
              errors={errors}
              onChange={handleChange}
              onSave={handleSave}
              onSaveAsDraft={handleSaveAsDraft}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}