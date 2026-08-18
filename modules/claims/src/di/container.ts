import { HttpClient } from '@app/shared-utils';
import { ClaimApiDataSource } from '../data/datasources/ClaimApiDataSource';
import { ClaimRepositoryImpl } from '../data/repositories/ClaimRepositoryImpl';
import { GetClaimsUseCase } from '../domain/usecases/GetClaims';
import { GetClaimDetailUseCase } from '../domain/usecases/GetClaimDetail';
import { SubmitClaimUseCase } from '../domain/usecases/SubmitClaim';

export function createClaimsContainer(httpClient: HttpClient) {
  const dataSource = new ClaimApiDataSource(httpClient);
  const repository = new ClaimRepositoryImpl(dataSource);

  return {
    getClaimsUseCase: new GetClaimsUseCase(repository),
    getClaimDetailUseCase: new GetClaimDetailUseCase(repository),
    submitClaimUseCase: new SubmitClaimUseCase(repository),
  };
}

export type ClaimsContainer = ReturnType<typeof createClaimsContainer>;
