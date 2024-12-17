export type ReportMetricType = 'events' | 'delivery' | 'inventory' | 'users';
export type ChartType = 'bar' | 'line' | 'pie' | 'heatmap';

export interface ReportMetric {
  id: string;
  type: ReportMetricType;
  label: string;
  value: number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description: string;
}

export interface ChartData {
  id: string;
  type: ChartType;
  title: string;
  description: string;
  data: any; // Specific chart data structure
}

export interface ReportFilters {
  dateRange?: {
    start: Date;
    end: Date;
  };
  metrics?: ReportMetricType[];
  groupBy?: string;
}