// Permission and role-based access control utilities
type Permission = 'create' | 'read' | 'update' | 'delete';
type Resource = 'event' | 'inventory' | 'personnel' | 'document';

interface UserRole {
  id: string;
  name: string;
  permissions: Array<`${Permission}:${Resource}`>;
}

export const checkPermission = (
  userRole: UserRole,
  permission: Permission,
  resource: Resource
): boolean => {
  return userRole.permissions.includes(`${permission}:${resource}`);
};

export const getResourceActions = (userRole: UserRole, resource: Resource): Permission[] => {
  return userRole.permissions
    .filter(p => p.endsWith(`:${resource}`))
    .map(p => p.split(':')[0] as Permission);
};

export const hasFullAccess = (userRole: UserRole, resource: Resource): boolean => {
  const requiredPermissions: Permission[] = ['create', 'read', 'update', 'delete'];
  return requiredPermissions.every(permission => 
    checkPermission(userRole, permission, resource)
  );
};