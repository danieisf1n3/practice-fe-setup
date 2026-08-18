import type { Claim } from '../entities/Claim';
import type { ClaimRepository } from '../repositories/ClaimRepository';

export class SubmitClaimUseCase {
  constructor(private claimRepository: ClaimRepository) {}

  execute(
    claim: Omit<Claim, 'id' | 'claimNumber' | 'status' | 'submittedAt' | 'updatedAt'>,
  ): Promise<Claim> {
    return this.claimRepository.submitClaim(claim);
  }
}
