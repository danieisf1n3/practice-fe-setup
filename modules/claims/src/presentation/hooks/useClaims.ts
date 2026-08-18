import { useState, useEffect, useCallback } from 'react';
import type { Claim } from '../../domain/entities/Claim';
import type { ClaimsContainer } from '../../di/container';

export function useClaims(container: ClaimsContainer) {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClaims = useCallback(async (page = 1, pageSize = 10) => {
    setLoading(true);
    setError(null);
    try {
      const result = await container.getClaimsUseCase.execute(page, pageSize);
      setClaims(result.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch claims');
    } finally {
      setLoading(false);
    }
  }, [container]);

  useEffect(() => {
    fetchClaims();
  }, [fetchClaims]);

  return { claims, loading, error, refetch: fetchClaims };
}
