import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  status: 'ongoing' | 'upcoming';
}

export default function EventCard({ title, date, status }: EventCardProps) {
  const statusColor = status === 'ongoing' ? 'bg-orange-500' : 'bg-green-500';
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{date}</p>
        </div>
        <button 
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          aria-label="View event details"
        >
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${statusColor}`} />
        <span className="text-sm text-gray-600 capitalize">{status}</span>
      </div>
    </div>
  );
}