import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import StatusSummaryCard from '../../components/delivery/status/StatusSummaryCard';
import DeliveryTable from '../../components/delivery/status/DeliveryTable';
import PODModal from '../../components/delivery/pod/PODModal';
import Button from '../../components/ui/Button';
import { Delivery, DeliveryStatusSummary } from '../../types/delivery';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'Status Updates' },
];

const statusSummaries: DeliveryStatusSummary[] = [
  { status: 'in-transit', count: 15, trend: { value: 5, isPositive: true } },
  { status: 'delivered', count: 42, trend: { value: 12, isPositive: true } },
  { status: 'delayed', count: 3, trend: { value: 2, isPositive: false } },
  { status: 'cancelled', count: 1 },
];

export default function DeliveryStatusPage() {
  const [selectedDeliveries, setSelectedDeliveries] = useState<string[]>([]);
  const [viewingPOD, setViewingPOD] = useState<Delivery | null>(null);

  const handleViewDetails = (delivery: Delivery) => {
    setViewingPOD(delivery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <Button variant="primary">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Delivery Status</h1>
        </div>
      </header>

      <main className="p-8 space-y-8">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statusSummaries.map((summary) => (
            <StatusSummaryCard
              key={summary.status}
              status={summary.status}
              count={summary.count}
              trend={summary.trend}
            />
          ))}
        </div>

        {/* Deliveries Table */}
        <DeliveryTable
          selectedDeliveries={selectedDeliveries}
          onSelect={setSelectedDeliveries}
          onViewDetails={handleViewDetails}
        />

        {/* POD Modal */}
        {viewingPOD?.proofOfDelivery && (
          <PODModal
            pod={viewingPOD.proofOfDelivery}
            isOpen={!!viewingPOD}
            onClose={() => setViewingPOD(null)}
            onApprove={() => {
              console.log('Approving POD');
              setViewingPOD(null);
            }}
            onReject={() => {
              console.log('Rejecting POD');
              setViewingPOD(null);
            }}
          />
        )}
      </main>
    </div>
  );
}