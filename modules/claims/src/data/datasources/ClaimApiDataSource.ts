import { HttpClient } from '@app/shared-utils';
import type { ClaimDto } from '../dtos/ClaimDto';

export class ClaimApiDataSource {
  constructor(private httpClient: HttpClient) {}

  async getClaims(page: number, pageSize: number) {
    return this.httpClient.get<{ items: ClaimDto[]; total: number }>(
      `/claims?page=${page}&pageSize=${pageSize}`,
    );
  }

  async getClaimById(id: string) {
    return this.httpClient.get<ClaimDto>(`/claims/${encodeURIComponent(id)}`);
  }

  async submitClaim(data: Partial<ClaimDto>) {
    return this.httpClient.post<ClaimDto>('/claims', data);
  }
}
