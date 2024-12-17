import React from 'react';
import { X } from 'lucide-react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import { ProofOfDelivery } from '../../../types/delivery';

interface PODModalProps {
  pod: ProofOfDelivery;
  isOpen: boolean;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export default function PODModal({
  pod,
  isOpen,
  onClose,
  onApprove,
  onReject,
}: PODModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Proof of Delivery"
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {pod.status === 'pending' && (
            <>
              <Button
                variant="secondary"
                onClick={onReject}
                className="bg-red-50 text-red-600 hover:bg-red-100"
              >
                Reject
              </Button>
              <Button variant="primary" onClick={onApprove}>
                Approve
              </Button>
            </>
          )}
        </>
      }
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Recipient Details</h3>
          <div className="mt-2">
            <p className="text-gray-900">{pod.recipientName}</p>
            <p className="text-sm text-gray-500">
              {new Date(pod.timestamp).toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Signature</h3>
          <div className="mt-2 border border-gray-200 rounded-lg p-4">
            <img
              src={pod.signature}
              alt="Signature"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Photos</h3>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {pod.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Delivery photo ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Comments</h3>
          <p className="mt-2 text-gray-600">{pod.comments}</p>
        </div>
      </div>
    </Modal>
  );
}