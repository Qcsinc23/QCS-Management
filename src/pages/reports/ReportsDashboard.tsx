import React, { useState } from 'react';
import { RefreshCw, Settings, Download } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/ui/Button';
import MetricsGrid from '../../components/reports/MetricsGrid';
import ChartsGrid from '../../components/reports/ChartsGrid';
import { useAutoRefresh } from '../../hooks/useAutoRefresh';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Reports' },
];

export default function ReportsDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const { lastUpdate, refresh } = useAutoRefresh(300000); // 5 minutes

  const handleRefresh = async () => {
    setIsLoading(true);
    await refresh();
    setIsLoading(false);
  };

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting reports...');
  };

  const handleCustomize = () => {
    // Open customization modal/panel
    console.log('Opening customization panel...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button variant="outline" onClick={handleCustomize}>
                <Settings className="w-4 h-4 mr-2" />
                Customize
              </Button>
              <Button variant="outline" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Reports Dashboard</h1>
        </div>
      </header>

      <main className="p-8 space-y-8">
        <MetricsGrid isLoading={isLoading} />
        <ChartsGrid isLoading={isLoading} />
      </main>
    </div>
  );
}