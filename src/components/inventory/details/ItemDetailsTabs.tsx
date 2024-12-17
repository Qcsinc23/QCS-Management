import React from 'react';

export type ItemDetailsTab = 'overview' | 'stock' | 'supplier' | 'events' | 'activity';

interface ItemDetailsTabsProps {
  activeTab: ItemDetailsTab;
  onChange: (tab: ItemDetailsTab) => void;
}

const TABS: { value: ItemDetailsTab; label: string }[] = [
  { value: 'overview', label: 'Overview' },
  { value: 'stock', label: 'Stock History' },
  { value: 'supplier', label: 'Supplier' },
  { value: 'events', label: 'Events' },
  { value: 'activity', label: 'Activity' },
];

export default function ItemDetailsTabs({ activeTab, onChange }: ItemDetailsTabsProps) {
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