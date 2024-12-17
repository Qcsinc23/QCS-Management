import React from 'react';
import { Calendar, TrendingUp, Package, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import EventCard from '../components/EventCard';
import TaskList from '../components/TaskList';
import InventoryAlerts from '../components/InventoryAlerts';
import ActiveDeliveries from '../components/ActiveDeliveries';

const tasks = [
  {
    name: 'Setup Conference Room',
    assignee: 'Robert Steve',
    dueDate: '15-03-2024',
    progress: 50,
    status: 'In Progress'
  },
  {
    name: 'Coordinate with Vendors',
    assignee: 'Sarah Johnson',
    dueDate: '18-03-2024',
    progress: 75,
    status: 'In Progress'
  },
  {
    name: 'Prepare Presentation Materials',
    assignee: 'Michael Chen',
    dueDate: '20-03-2024',
    progress: 25,
    status: 'In Progress'
  }
];

const inventoryItems = [
  { name: 'Conference Badges' },
  { name: 'Presentation Materials' },
  { name: 'Event Banners' }
];

const upcomingEvents = [
  {
    title: 'Annual Tech Conference',
    date: '15-03-2024',
    status: 'ongoing' as const
  },
  {
    title: 'Product Launch Event',
    date: '20-03-2024',
    status: 'upcoming' as const
  }
];

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          value="158"
          label="Events managed this month"
          isHighlighted
          icon={<Calendar className="w-6 h-6 text-orange-500" />}
        />
        <StatCard
          value="95%"
          label="On-time delivery rate"
          icon={<TrendingUp className="w-6 h-6 text-[#052B5D]" />}
        />
        <StatCard
          value="218"
          label="Total tasks completed"
          icon={<Package className="w-6 h-6 text-[#052B5D]" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Upcoming Events */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  status={event.status}
                />
              ))}
            </div>
          </section>

          {/* Task Assignments */}
          <TaskList tasks={tasks} />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Inventory Alerts */}
          <InventoryAlerts items={inventoryItems} />

          {/* Active Deliveries */}
          <ActiveDeliveries />
        </div>
      </div>
    </div>
  );
}