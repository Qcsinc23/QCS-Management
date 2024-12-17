import React from 'react';
import { Card, CardHeader, CardContent } from '../../../ui/Card';
import { InventoryItem } from '../../../../types/inventory';

interface OverviewTabProps {
  item: InventoryItem;
}

export default function OverviewTab({ item }: OverviewTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Stock Information</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Available Quantity</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {item.availableQty}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Reserved Quantity</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {item.reservedQty}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Minimum Stock Level</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {item.minimumQty}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {item.location}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                Update Stock Level
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                Move Location
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                Generate Report
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}