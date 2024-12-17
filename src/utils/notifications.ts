// Notification and alert utilities
type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationOptions {
  title: string;
  message: string;
  type: NotificationType;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

class NotificationManager {
  private static instance: NotificationManager;
  private listeners: ((notification: NotificationOptions) => void)[] = [];

  private constructor() {}

  static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  subscribe(listener: (notification: NotificationOptions) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  show(options: NotificationOptions) {
    this.listeners.forEach(listener => listener(options));
  }

  success(message: string, title = 'Success') {
    this.show({ type: 'success', title, message });
  }

  error(message: string, title = 'Error') {
    this.show({ type: 'error', title, message });
  }

  warning(message: string, title = 'Warning') {
    this.show({ type: 'warning', title, message });
  }

  info(message: string, title = 'Info') {
    this.show({ type: 'info', title, message });
  }
}

export const notifications = NotificationManager.getInstance();