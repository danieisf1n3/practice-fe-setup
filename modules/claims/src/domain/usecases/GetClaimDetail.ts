import type { Claim } from '../entities/Claim';
import type { ClaimRepository } from '../repositories/ClaimRepository';

export class GetClaimDetailUseCase {
  constructor(private claimRepository: ClaimRepository) {}

  execute(id: string): Promise<Claim> {
    return this.claimRepository.getClaimById(id);
  }
}
