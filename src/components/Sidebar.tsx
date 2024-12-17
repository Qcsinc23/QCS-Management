import React from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { 
  LayoutDashboard, 
  Calendar, 
  Truck, 
  Package, 
  BarChart2, 
  Users, 
  Settings,
  Waves
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Calendar, label: 'Events', href: '/events' },
  { icon: Truck, label: 'Logistics', href: '/logistics' },
  { icon: Package, label: 'Inventory', href: '/inventory' },
  { icon: Truck, label: 'Deliveries', href: '/deliveries' },
  { icon: BarChart2, label: 'Reports', href: '/reports' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Settings, label: 'Settings', href: '/settings' }
];

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Waves className="w-8 h-8 text-transparent bg-gradient-to-br from-blue-500 via-teal-500 to-orange-500" />
          <span className="font-bold text-sm tracking-wider text-gray-800">
            QUIET CRAFT SOLUTIONS INC.
          </span>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href;

            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg
                    transition-colors duration-150
                    ${isActive 
                      ? 'bg-gray-50 text-gray-900 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}