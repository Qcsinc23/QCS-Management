import React from 'react';
import { Link } from '@tanstack/react-router';
import { NavItem } from '../types/navigation';

interface SidebarNavItemProps extends NavItem {
  href: string;
}

export default function SidebarNavItem({ icon: Icon, label, active, href }: SidebarNavItemProps) {
  return (
    <li>
      <Link
        to={href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          active
            ? 'bg-gray-50 text-gray-900 font-medium'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
    </li>
  );
}