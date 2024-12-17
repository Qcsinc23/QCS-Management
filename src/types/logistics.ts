export type TaskPriority = 'high' | 'medium' | 'low';
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'overdue';

export interface Task {
  id: string;
  name: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  assignee: string;
  relatedEvent?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  status: 'available' | 'in-use' | 'maintenance';
  driver?: string;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface Route {
  id: string;
  vehicleId: string;
  stops: RouteStop[];
  status: 'planned' | 'in-progress' | 'completed';
  estimatedDuration: number;
}

export interface RouteStop {
  id: string;
  address: string;
  type: 'pickup' | 'dropoff';
  scheduledTime: string;
  status: 'pending' | 'completed';
}