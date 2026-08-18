import type { Claim } from '../entities/Claim';
import type { ClaimRepository } from '../repositories/ClaimRepository';
import type { PaginatedResponse } from '@app/shared-types';

export class GetClaimsUseCase {
  constructor(private claimRepository: ClaimRepository) {}

  execute(page = 1, pageSize = 10): Promise<PaginatedResponse<Claim>> {
    return this.claimRepository.getClaims(page, pageSize);
  }
}
