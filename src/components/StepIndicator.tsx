import React from 'react';
import { Info, Calendar, MapPin, Package, Users, FileText } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

const steps: Step[] = [
  { icon: <Info className="w-5 h-5" />, label: 'Information', status: 'current' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Schedule', status: 'upcoming' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Location', status: 'upcoming' },
  { icon: <Package className="w-5 h-5" />, label: 'Resources', status: 'upcoming' },
  { icon: <Users className="w-5 h-5" />, label: 'Personnel', status: 'upcoming' },
  { icon: <FileText className="w-5 h-5" />, label: 'Documents', status: 'upcoming' },
];

export default function StepIndicator() {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.status === 'current'
                  ? 'bg-orange-500 text-white'
                  : step.status === 'completed'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step.icon}
            </div>
            <span className="mt-2 text-sm text-gray-600">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-full mx-2 ${
                step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}