# @app/module-claims

Claims micro-FE module — **reference implementation** of Clean Architecture + Atomic Design.

Use this module as the template when building out `policy`, `portfolio`, and `payment`.

## Clean Architecture Layers

```
src/
├── domain/                     # Pure TypeScript, zero external dependencies
│   ├── entities/Claim.ts       # Claim, ClaimType, ClaimStatus
│   ├── repositories/           # ClaimRepository interface (port)
│   └── usecases/               # GetClaims, GetClaimDetail, SubmitClaim
│
├── data/                       # Implements domain interfaces
│   ├── dtos/ClaimDto.ts        # API response shape (snake_case)
│   ├── mappers/ClaimMapper.ts  # DTO ↔ Domain mapping
│   ├── datasources/            # ClaimApiDataSource (HTTP calls)
│   └── repositories/           # ClaimRepositoryImpl (adapter)
│
├── di/container.ts             # Wires data → domain, exports use cases
│
├── presentation/               # Atomic Design UI
│   ├── hooks/useClaims.ts      # React hook consuming use cases
│   └── pages/ClaimsListPage.tsx
│
├── routes.tsx                  # React Router route definitions
└── index.ts                    # Public API
```

## Usage in Host App

```tsx
import { createClaimsContainer, getClaimsRoutes } from '@app/module-claims';
import { HttpClient } from '@app/shared-utils';

const httpClient = new HttpClient('https://api.example.com');
const claimsContainer = createClaimsContainer(httpClient);

// In router
{getClaimsRoutes(claimsContainer)}
```

## Dependency Rule

```
Presentation → Domain ← Data
```

- **Domain** knows nothing about Data or Presentation
- **Data** implements Domain interfaces
- **Presentation** consumes Domain use cases via DI container
