import { Router, Route, RootRoute } from '@tanstack/react-router';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import EventCalendar from './pages/events/EventCalendar';
import CreateEvent from './pages/events/CreateEvent';
import EventDetails from './pages/events/EventDetails';
import LogisticsLayout from './pages/logistics/LogisticsLayout';
import LogisticsOverview from './pages/logistics/Overview';
import TaskAssignment from './pages/logistics/TaskAssignment';
import RoutePlanning from './pages/logistics/RoutePlanning';
import VehicleManagement from './pages/logistics/VehicleManagement';
import InventoryList from './pages/inventory/InventoryList';
import AlertsNotifications from './pages/inventory/AlertsNotifications';
import LiveTracking from './pages/deliveries/LiveTracking';
import DeliveryStatusPage from './pages/deliveries/DeliveryStatusPage';
import ReportsDashboard from './pages/reports/ReportsDashboard';
import UsersList from './pages/users/UsersList';
import SettingsPage from './pages/settings/SettingsPage';

// Root route
const rootRoute = new RootRoute({
  component: MainLayout,
});

// Define routes
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});

// Events routes
const eventsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'events',
  component: EventCalendar,
});

const createEventRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'events/create',
  component: CreateEvent,
});

const eventDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'events/$id',
  component: EventDetails,
});

// Logistics routes
const logisticsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'logistics',
  component: LogisticsLayout,
});

const logisticsOverviewRoute = new Route({
  getParentRoute: () => logisticsRoute,
  path: '/',
  component: LogisticsOverview,
});

const taskAssignmentRoute = new Route({
  getParentRoute: () => logisticsRoute,
  path: 'tasks',
  component: TaskAssignment,
});

const routePlanningRoute = new Route({
  getParentRoute: () => logisticsRoute,
  path: 'routes',
  component: RoutePlanning,
});

const vehicleManagementRoute = new Route({
  getParentRoute: () => logisticsRoute,
  path: 'vehicles',
  component: VehicleManagement,
});

// Inventory routes
const inventoryRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'inventory',
  component: InventoryList,
});

const alertsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'inventory/alerts',
  component: AlertsNotifications,
});

// Deliveries routes
const deliveriesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'deliveries',
  component: LiveTracking,
});

const deliveryStatusRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'deliveries/status',
  component: DeliveryStatusPage,
});

// Reports route
const reportsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'reports',
  component: ReportsDashboard,
});

// Users route
const usersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'users',
  component: UsersList,
});

// Settings route
const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'settings',
  component: SettingsPage,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  eventsRoute,
  createEventRoute,
  eventDetailsRoute,
  logisticsRoute.addChildren([
    logisticsOverviewRoute,
    taskAssignmentRoute,
    routePlanningRoute,
    vehicleManagementRoute,
  ]),
  inventoryRoute,
  alertsRoute,
  deliveriesRoute,
  deliveryStatusRoute,
  reportsRoute,
  usersRoute,
  settingsRoute,
]);

// Create and export the router instance
export const router = new Router({ routeTree });

// For TypeScript support
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}