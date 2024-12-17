import React from 'react';
import { Eye, Clock } from 'lucide-react';
import Table from '../../ui/Table';
import StatusBadge from '../../ui/StatusBadge';
import { Delivery } from '../../../types/delivery';

interface DeliveryTableProps {
  deliveries: Delivery[];
  selectedDeliveries: string[];
  onSelect: (ids: string[]) => void;
  onViewDetails: (delivery: Delivery) => void;
}

export default function DeliveryTable({
  deliveries,
  selectedDeliveries,
  onSelect,
  onViewDetails,
}: DeliveryTableProps) {
  const columns = [
    {
      key: 'id',
      header: 'Delivery ID',
      render: (delivery: Delivery) => (
        <div className="font-medium text-gray-900">{delivery.id}</div>
      ),
    },
    {
      key: 'eventId',
      header: 'Related Event',
      render: (delivery: Delivery) => (
        <div className="text-gray-600">{delivery.eventId}</div>
      ),
    },
    {
      key: 'pickup',
      header: 'Pickup',
      render: (delivery: Delivery) => (
        <div>
          <div className="text-gray-900">{delivery.pickup.address}</div>
          <div className="text-sm text-gray-500">{delivery.pickup.contactName}</div>
        </div>
      ),
    },
    {
      key: 'dropoff',
      header: 'Drop-off',
      render: (delivery: Delivery) => (
        <div>
          <div className="text-gray-900">{delivery.dropoff.address}</div>
          <div className="text-sm text-gray-500">{delivery.dropoff.contactName}</div>
        </div>
      ),
    },
    {
      key: 'scheduledTime',
      header: 'Scheduled',
      render: (delivery: Delivery) => (
        <div className="text-gray-600">
          {new Date(delivery.scheduledTime).toLocaleString()}
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (delivery: Delivery) => (
        <StatusBadge status={delivery.status} />
      ),
    },
    {
      key: 'eta',
      header: 'ETA',
      render: (delivery: Delivery) => (
        delivery.eta ? (
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{new Date(delivery.eta).toLocaleTimeString()}</span>
          </div>
        ) : null
      ),
    },
    {
      key: 'actions',
      header: '',
      render: (delivery: Delivery) => (
        <button
          onClick={() => onViewDetails(delivery)}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <Eye className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Table
        columns={columns}
        data={deliveries}
        selectedRows={selectedDeliveries}
        onSelectRows={onSelect}
      />
    </div>
  );
}