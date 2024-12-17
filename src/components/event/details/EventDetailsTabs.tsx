import React from 'react';

export type EventDetailsTab = 'logistics' | 'inventory' | 'personnel' | 'documents';

interface EventDetailsTabsProps {
  activeTab: EventDetailsTab;
  onChange: (tab: EventDetailsTab) => void;
}

const TABS: { value: EventDetailsTab; label: string }[] = [
  { value: 'logistics', label: 'Logistics Plan' },
  { value: 'inventory', label: 'Inventory' },
  { value: 'personnel', label: 'Personnel' },
  { value: 'documents', label: 'Documents' },
];

export default function EventDetailsTabs({ activeTab, onChange }: EventDetailsTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="px-8">
        <nav className="flex gap-8">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`
                py-4 text-sm font-medium border-b-2 transition-colors
                ${activeTab === tab.value
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}