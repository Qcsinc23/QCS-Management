import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import StepIndicator from '../components/StepIndicator';
import BasicInformationForm from '../components/event/BasicInformationForm';
import { EventFormData } from '../types/event';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Create New Event' },
];

export default function CreateEvent() {
  const [formData, setFormData] = useState<EventFormData>({
    name: '',
    type: '',
    description: '',
  });

  const handleSaveAsDraft = () => {
    console.log('Saving as draft:', formData);
  };

  const handleSaveAndContinue = () => {
    console.log('Saving and continuing:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <Breadcrumb items={breadcrumbItems} />
              <button
                onClick={handleSaveAsDraft}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Event</h1>
            <StepIndicator />
          </div>
        </header>

        <main className="p-8 max-w-5xl mx-auto">
          <BasicInformationForm data={formData} onChange={setFormData} />
          
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleSaveAndContinue}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Save & Continue
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}