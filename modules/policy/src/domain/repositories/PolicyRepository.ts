import type { Policy } from '../entities/Policy';
import type { PaginatedResponse } from '@app/shared-types';

export interface PolicyRepository {
  getPolicies(page: number, pageSize: number): Promise<PaginatedResponse<Policy>>;
  getPolicyById(id: string): Promise<Policy>;
}
