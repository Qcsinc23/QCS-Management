import React from 'react';
import { Card } from '../../../components/ui/Card';
import { CreditCard, Package, ChevronRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Current Plan</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded">
                  <Package className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Professional Plan</div>
                  <div className="text-sm text-gray-500">$49/month • Up to 1,000 deliveries</div>
                </div>
              </div>
              <Button variant="outline">Upgrade Plan</Button>
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-orange-500 rounded-full" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              750/1,000 deliveries used this month
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Method</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">•••• 4242</div>
                  <div className="text-sm text-gray-500">Expires 12/24</div>
                </div>
              </div>
              <Button variant="outline">Update</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Billing History</h2>
          <div className="space-y-2">
            {[
              { date: 'Mar 1, 2024', amount: '$49.00', status: 'Paid' },
              { date: 'Feb 1, 2024', amount: '$49.00', status: 'Paid' },
              { date: 'Jan 1, 2024', amount: '$49.00', status: 'Paid' },
            ].map((invoice, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div>
                  <div className="font-medium text-gray-900">{invoice.date}</div>
                  <div className="text-sm text-gray-500">{invoice.amount}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-600">{invoice.status}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}