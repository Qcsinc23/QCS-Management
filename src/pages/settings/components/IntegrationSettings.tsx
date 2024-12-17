import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Globe, Key, RefreshCw } from 'lucide-react';
import Button from '../../../components/ui/Button';

const integrations = [
  {
    id: 'google-maps',
    name: 'Google Maps',
    description: 'Used for route planning and delivery tracking',
    status: 'connected',
    icon: Globe,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing integration',
    status: 'disconnected',
    icon: Key,
  },
];

export default function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Connected Services</h2>
          <div className="space-y-6">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded">
                    <integration.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{integration.name}</div>
                    <div className="text-sm text-gray-500">{integration.description}</div>
                  </div>
                </div>
                <Button
                  variant={integration.status === 'connected' ? 'outline' : 'primary'}
                >
                  {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">API Access</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium text-gray-900">API Key</div>
                  <div className="text-sm text-gray-500">Use this key to authenticate API requests</div>
                </div>
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 p-2 bg-gray-100 rounded font-mono text-sm">
                  sk_test_51H3d...
                </code>
                <Button variant="outline">Copy</Button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium text-gray-900">Webhook URL</div>
                  <div className="text-sm text-gray-500">Endpoint for receiving event notifications</div>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="text-sm text-gray-600">
                https://api.example.com/webhooks/events
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}