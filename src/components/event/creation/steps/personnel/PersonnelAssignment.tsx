import React from 'react';
import { User } from 'lucide-react';
import Select from '../../../../ui/Select';
import { EventPersonnelAssignment } from '../../../../../types/event';

interface PersonnelAssignmentProps {
  assignments: EventPersonnelAssignment[];
  onAssignmentsChange: (assignments: EventPersonnelAssignment[]) => void;
  error?: string;
}

export default function PersonnelAssignment({
  assignments,
  onAssignmentsChange,
  error,
}: PersonnelAssignmentProps) {
  const updateAssignment = (roleId: string, userId: string) => {
    const newAssignments = assignments.filter(a => a.roleId !== roleId);
    if (userId) {
      newAssignments.push({ roleId, userId });
    }
    onAssignmentsChange(newAssignments);
  };

  return (
    <div className="space-y-4">
      <Typography variant="h3">Assign Personnel</Typography>

      {assignments.map((assignment) => (
        <div
          key={assignment.roleId}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="p-2 bg-white rounded-lg">
            <User className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex-1">
            <Select
              value={assignment.userId}
              onChange={(e) => updateAssignment(assignment.roleId, e.target.value)}
              options={[
                { value: '', label: 'Select person' },
                { value: '1', label: 'John Smith' },
                { value: '2', label: 'Sarah Johnson' },
              ]}
            />
          </div>
        </div>
      ))}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}