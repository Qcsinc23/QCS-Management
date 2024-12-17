import React from 'react';
import { Plus, X } from 'lucide-react';
import Button from '../../../../ui/Button';
import Input from '../../../../ui/Input';
import { EventPersonnelRole } from '../../../../../types/event';

interface PersonnelRoleListProps {
  roles: EventPersonnelRole[];
  onRolesChange: (roles: EventPersonnelRole[]) => void;
  error?: string;
}

export default function PersonnelRoleList({
  roles,
  onRolesChange,
  error,
}: PersonnelRoleListProps) {
  const addRole = () => {
    onRolesChange([
      ...roles,
      { id: Date.now().toString(), title: '', requiredCount: 1 },
    ]);
  };

  const updateRole = (id: string, updates: Partial<EventPersonnelRole>) => {
    onRolesChange(
      roles.map((role) =>
        role.id === id ? { ...role, ...updates } : role
      )
    );
  };

  const removeRole = (id: string) => {
    onRolesChange(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Typography variant="h3">Required Roles</Typography>
        <Button variant="outline" onClick={addRole} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Role
        </Button>
      </div>

      {roles.map((role) => (
        <div
          key={role.id}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex-1">
            <Input
              placeholder="Role title"
              value={role.title}
              onChange={(e) => updateRole(role.id, { title: e.target.value })}
            />
          </div>
          <div className="w-32">
            <Input
              type="number"
              min="1"
              value={role.requiredCount}
              onChange={(e) => updateRole(role.id, { requiredCount: parseInt(e.target.value) })}
            />
          </div>
          <button
            onClick={() => removeRole(role.id)}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}