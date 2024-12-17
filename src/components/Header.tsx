import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="h-full flex items-center justify-end px-6">
        <div className="flex items-center gap-6">
          <button 
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium text-gray-900">Sherwyn Graham</span>
          </div>
        </div>
      </div>
    </header>
  );
}