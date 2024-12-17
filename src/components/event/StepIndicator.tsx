import React from 'react';
import { Info, Calendar, MapPin, Package, Users, FileText } from 'lucide-react';

export type EventCreationStep = 
  | 'information'
  | 'date'
  | 'location'
  | 'inventory'
  | 'personnel'
  | 'documents';

interface StepConfig {
  icon: React.ReactNode;
  label: string;
}

const STEPS: Record<EventCreationStep, StepConfig> = {
  information: { icon: <Info className="w-5 h-5" />, label: 'Information' },
  date: { icon: <Calendar className="w-5 h-5" />, label: 'Date' },
  location: { icon: <MapPin className="w-5 h-5" />, label: 'Location' },
  inventory: { icon: <Package className="w-5 h-5" />, label: 'Inventory' },
  personnel: { icon: <Users className="w-5 h-5" />, label: 'Personnel' },
  documents: { icon: <FileText className="w-5 h-5" />, label: 'Documents' },
};

interface StepIndicatorProps {
  currentStep: EventCreationStep;
  completedSteps: EventCreationStep[];
}

export default function StepIndicator({ currentStep, completedSteps }: StepIndicatorProps) {
  const steps = Object.entries(STEPS) as [EventCreationStep, StepConfig][];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between min-w-[768px] px-4">
        {steps.map(([step, config], index) => {
          const isCompleted = completedSteps.includes(step);
          const isCurrent = step === currentStep;

          return (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${isCurrent ? 'bg-orange-500 text-white' :
                      isCompleted ? 'bg-green-500 text-white' :
                      'bg-gray-100 text-gray-400'}
                  `}
                >
                  {config.icon}
                </div>
                <span className="mt-2 text-sm text-gray-600">
                  {config.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`
                    h-0.5 w-full mx-2
                    ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}