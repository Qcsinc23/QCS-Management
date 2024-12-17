import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import Input from '../../components/ui/Input';
import StatusBadge from '../../components/ui/StatusBadge';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Users' },
];

const columns = [
  {
    key: 'name',
    header: 'Full Name',
    render: (user: any) => (
      <div className="flex items-center gap-3">
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-medium text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'role',
    header: 'Role',
    render: (user: any) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
        user.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {user.role}
      </span>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    render: (user: any) => (
      <StatusBadge 
        status={user.status === 'Active' ? 'success' : 'error'}
        label={user.status}
      />
    ),
  },
  { key: 'lastActive', header: 'Last Active' },
  {
    key: 'actions',
    header: '',
    render: (user: any) => (
      <div className="flex items-center justify-end gap-2">
        <button className="text-sm text-gray-600 hover:text-gray-900">Edit</button>
        <button className="text-sm text-red-600 hover:text-red-900">Delete</button>
      </div>
    ),
  },
];

const sampleUsers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Manager',
    status: 'Active',
    lastActive: '1 day ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function UsersList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Breadcrumb items={breadcrumbItems} />
            <Button variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        </div>
      </header>

      <main className="p-8">
        <Card>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          <Table
            columns={columns}
            data={sampleUsers}
            selectedRows={selectedUsers}
            onSelectRows={setSelectedUsers}
          />
        </Card>
      </main>
    </div>
  );
}