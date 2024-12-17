import React from 'react';
import { Card } from '../../../../ui/Card';
import Typography from '../../../../ui/Typography';
import PersonnelRoleList from './PersonnelRoleList';
import PersonnelAssignment from './PersonnelAssignment';
import { EventFormData } from '../../../../../types/event';

interface PersonnelStepProps {
  data: Partial<EventFormData>;
  errors?: Record<string, string>;
  onChange: (field: keyof EventFormData, value: any) => void;
}

export default function PersonnelStep({
  data,
  errors,
  onChange,
}: PersonnelStepProps) {
  return (
    <Card>
      <div className="p-6">
        <Typography variant="h2" className="mb-6">Event Personnel</Typography>
        
        <div className="space-y-8">
          <PersonnelRoleList
            roles={data.personnelRoles || []}
            onRolesChange={(roles) => onChange('personnelRoles', roles)}
            error={errors?.personnelRoles}
          />

          <PersonnelAssignment
            assignments={data.personnelAssignments || []}
            onAssignmentsChange={(assignments) => onChange('personnelAssignments', assignments)}
            error={errors?.personnelAssignments}
          />
        </div>
      </div>
    </Card>
  );
}