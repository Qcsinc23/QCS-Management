import { useState, useEffect, useCallback } from 'react';

export function useAutoRefresh(interval: number) {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const refresh = useCallback(async () => {
    // Implement actual data refresh logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    const timer = setInterval(refresh, interval);
    return () => clearInterval(timer);
  }, [interval, refresh]);

  return { lastUpdate, refresh };
}