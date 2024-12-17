import { useState, useEffect } from 'react';
import { Vehicle } from '../types/delivery';

interface UseVehicleTrackingResult {
  vehicles: Vehicle[];
  isLoading: boolean;
  error: Error | null;
  lastUpdate: Date;
}

export function useVehicleTracking(): UseVehicleTrackingResult {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    let mounted = true;
    let interval: NodeJS.Timeout;

    const fetchVehicles = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (!mounted) return;

        // Sample data
        setVehicles([
          {
            id: 'V001',
            name: 'Truck 001',
            status: 'active',
            speed: 45,
            currentLocation: {
              lat: 40.7128,
              lng: -74.0060
            },
            driver: {
              id: 'D001',
              name: 'John Smith',
              photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              phone: '+1 234 567 890',
              email: 'john@example.com'
            },
            lastUpdated: new Date()
          }
        ]);
        
        setLastUpdate(new Date());
        setError(null);
      } catch (err) {
        if (!mounted) return;
        setError(err as Error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchVehicles();
    interval = setInterval(fetchVehicles, 30000); // Update every 30 seconds

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { vehicles, isLoading, error, lastUpdate };
}