import type { Claim, ClaimType, ClaimStatus } from '../../domain/entities/Claim';
import type { ClaimDto } from '../dtos/ClaimDto';

export const ClaimMapper = {
  toDomain(dto: ClaimDto): Claim {
    return {
      id: dto.id,
      policyId: dto.policy_id,
      claimNumber: dto.claim_number,
      type: dto.type as ClaimType,
      status: dto.status as ClaimStatus,
      amount: dto.amount,
      currency: dto.currency,
      description: dto.description,
      submittedAt: dto.submitted_at,
      updatedAt: dto.updated_at,
    };
  },

  toDto(domain: Omit<Claim, 'id' | 'claimNumber' | 'status' | 'submittedAt' | 'updatedAt'>): Partial<ClaimDto> {
    return {
      policy_id: domain.policyId,
      type: domain.type,
      amount: domain.amount,
      currency: domain.currency,
      description: domain.description,
    };
  },
};
