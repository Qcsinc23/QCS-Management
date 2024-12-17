import { TaskPriority, TaskStatus } from './logistics';

export interface TaskFormData {
  name: string;
  description: string;
  priority: TaskPriority;
  dueDate: string;
  dueTime: string;
  assigneeId: string;
  eventId?: string;
  notifyOnComplete: boolean;
}

export interface TaskFilters {
  search?: string;
  status?: TaskStatus[];
  priority?: TaskPriority[];
  assigneeId?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
}