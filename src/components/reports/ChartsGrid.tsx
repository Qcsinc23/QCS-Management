import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ChartData } from '../../types/reports';

interface ChartsSectionProps {
  isLoading?: boolean;
}

const sampleCharts: ChartData[] = [
  {
    id: '1',
    type: 'bar',
    title: 'Active Deliveries',
    description: 'Deliveries by region',
    data: {}, // Add chart-specific data structure
  },
  {
    id: '2',
    type: 'heatmap',
    title: 'Delivery Heatmap',
    description: 'Delivery density by location',
    data: {}, // Add chart-specific data structure
  },
  {
    id: '3',
    type: 'pie',
    title: 'Resource Utilization',
    description: 'Resource allocation breakdown',
    data: {}, // Add chart-specific data structure
  },
];

export default function ChartsGrid({ isLoading }: ChartsSectionProps) {
  const [expandedChart, setExpandedChart] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <div className="p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-48 mb-4" />
              <div className="h-64 bg-gray-100 rounded" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {sampleCharts.map((chart) => (
        <Card
          key={chart.id}
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setExpandedChart(chart.id)}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900">{chart.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{chart.description}</p>
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
              <span className="text-gray-400">Chart visualization goes here</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}