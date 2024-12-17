import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
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

export default function ChartsSection({ isLoading }: ChartsSectionProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-48 animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {sampleCharts.map((chart) => (
        <Card key={chart.id}>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">{chart.title}</h2>
            <p className="text-sm text-gray-500">{chart.description}</p>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
              <span className="text-gray-400">Chart visualization goes here</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}