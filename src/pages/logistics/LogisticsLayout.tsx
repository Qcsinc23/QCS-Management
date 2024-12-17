import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Breadcrumb from '../../components/Breadcrumb';

export default function LogisticsLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-8 py-6 bg-white border-b border-gray-200">
        <Breadcrumb items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Logistics' }
        ]} />
      </div>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}