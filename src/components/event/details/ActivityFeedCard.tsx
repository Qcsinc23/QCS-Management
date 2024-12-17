import React from 'react';
import { Card } from '../../ui/Card';
import Typography from '../../ui/Typography';

interface Activity {
  id: string;
  description: string;
  timestamp: string;
  type: 'task' | 'update' | 'comment';
}

interface ActivityFeedCardProps {
  activities: Activity[];
}

export default function ActivityFeedCard({ activities }: ActivityFeedCardProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-4">Activity Feed</Typography>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-orange-500" />
              <div>
                <Typography variant="body" className="text-gray-900">
                  {activity.description}
                </Typography>
                <Typography variant="caption" className="mt-1">
                  {activity.timestamp}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}