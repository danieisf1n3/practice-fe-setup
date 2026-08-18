import type { Claim } from '../entities/Claim';
import type { PaginatedResponse } from '@app/shared-types';

export interface ClaimRepository {
  getClaims(page: number, pageSize: number): Promise<PaginatedResponse<Claim>>;
  getClaimById(id: string): Promise<Claim>;
  submitClaim(claim: Omit<Claim, 'id' | 'claimNumber' | 'status' | 'submittedAt' | 'updatedAt'>): Promise<Claim>;
}
