import type { Policy } from '../entities/Policy';
import type { PolicyRepository } from '../repositories/PolicyRepository';
import type { PaginatedResponse } from '@app/shared-types';

export class GetPoliciesUseCase {
  constructor(private repo: PolicyRepository) {}

  execute(page = 1, pageSize = 10): Promise<PaginatedResponse<Policy>> {
    return this.repo.getPolicies(page, pageSize);
  }
}
