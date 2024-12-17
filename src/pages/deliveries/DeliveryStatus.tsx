import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import DeliveryStatusCard from '../../components/delivery/status/DeliveryStatusCard';
import DeliveryTable from '../../components/delivery/status/DeliveryTable';
import PODModal from '../../components/delivery/pod/PODModal';
import Button from '../../components/ui/Button';
import { Delivery, DeliveryStatus } from '../../types/delivery';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'Status Updates' },
];

// Sample data - in a real app, this would come from an API
const sampleDeliveries: Delivery[] = [
  {
    id: 'DEL001',
    eventId: 'EVT001',
    driverId: 'DRV001',
    vehicleId: 'VEH001',
    status: 'in-transit',
    pickup: {
      address: '123 Main St, New York',
      lat: 40.7128,
      lng: -74.006,
      contactName: 'John Smith',
      contactPhone: '+1 234 567 890',
    },
    dropoff: {
      address: '456 Park Ave, New York',
      lat: 40.7589,
      lng: -73.9851,
      contactName: 'Jane Doe',
      contactPhone: '+1 234 567 891',
    },
    scheduledTime: new Date(),
    eta: new Date(Date.now() + 30 * 60000), // 30 minutes from now
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const statusCounts: Record<DeliveryStatus, { count: number; trend?: { value: number; isPositive: boolean } }> = {
  'in-transit': { count: 15, trend: { value: 5, isPositive: true } },
  'delivered': { count: 42, trend: { value: 12, isPositive: true } },
  'delayed': { count: 3, trend: { value: 2, isPositive: false } },
  'cancelled': { count: 1 },
};

export default function DeliveryStatus() {
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
          {(Object.entries(statusCounts) as [DeliveryStatus, typeof statusCounts[DeliveryStatus]][]).map(([status, data]) => (
            <DeliveryStatusCard
              key={status}
              status={status}
              count={data.count}
              trend={data.trend}
            />
          ))}
        </div>

        {/* Deliveries Table */}
        <DeliveryTable
          deliveries={sampleDeliveries}
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