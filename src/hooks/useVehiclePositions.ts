import { useState, useEffect } from 'react';

interface Vehicle {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  speed: number;
  status: 'active' | 'idle' | 'stopped';
  driver: {
    name: string;
    photo: string;
  };
  eta: number;
}

export function useVehiclePositions(lastUpdate: Date) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const fetchPositions = async () => {
      if (!mounted) return;
      
      setLoading(true);
      setError(null);

      try {
        // In a real implementation, this would be a WebSocket connection
        // or an API call to get vehicle positions
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (!mounted) return;

        setVehicles([
          {
            id: 'VEH-001',
            position: { lat: 40.7128, lng: -74.0060 },
            speed: 45,
            status: 'active',
            driver: {
              name: 'John Smith',
              photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
            },
            eta: 25,
          },
          // Add more sample vehicles here
        ]);

        setLoading(false);
      } catch (err) {
        if (!mounted) return;

        setError(err as Error);
        setLoading(false);

        // Retry logic
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(fetchPositions, 5000 * retryCount);
        }
      }
    };

    fetchPositions();

    return () => {
      mounted = false;
    };
  }, [lastUpdate]);

  return { vehicles, loading, error };
}