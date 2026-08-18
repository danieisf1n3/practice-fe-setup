import type { ClaimRepository } from '../../domain/repositories/ClaimRepository';
import type { Claim } from '../../domain/entities/Claim';
import type { PaginatedResponse } from '@app/shared-types';
import { ClaimApiDataSource } from '../datasources/ClaimApiDataSource';
import { ClaimMapper } from '../mappers/ClaimMapper';

export class ClaimRepositoryImpl implements ClaimRepository {
  constructor(private dataSource: ClaimApiDataSource) {}

  async getClaims(page: number, pageSize: number): Promise<PaginatedResponse<Claim>> {
    const response = await this.dataSource.getClaims(page, pageSize);
    const { items, total } = response.data;
    return {
      data: items.map(ClaimMapper.toDomain),
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async getClaimById(id: string): Promise<Claim> {
    const response = await this.dataSource.getClaimById(id);
    return ClaimMapper.toDomain(response.data);
  }

  async submitClaim(
    claim: Omit<Claim, 'id' | 'claimNumber' | 'status' | 'submittedAt' | 'updatedAt'>,
  ): Promise<Claim> {
    const dto = ClaimMapper.toDto(claim);
    const response = await this.dataSource.submitClaim(dto);
    return ClaimMapper.toDomain(response.data);
  }
}
