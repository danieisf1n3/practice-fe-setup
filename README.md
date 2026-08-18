# App Frontend Monorepo

Core (RO) frontend monorepo for the App platform — **Customer Portal** (Ionic + React) and **Web Admin Portal** (React).

## Architecture

- **Monorepo**: Turborepo + pnpm workspaces
- **UI**: Atomic Design (atoms → molecules → organisms → templates → pages)
- **Business Logic**: Clean Architecture (presentation → domain ← data)
- **Micro-FE**: Feature modules (claims, policy, portfolio, payment) loaded into host apps
- **i18n**: i18next with market-level locale overrides

## Prerequisites

- Node.js >= 20
- pnpm >= 10

## Getting Started

```bash
# Install dependencies
pnpm install

# Start Customer Portal (Ionic + React) on http://localhost:3000
pnpm dev:customer

# Start Admin Portal (React) on http://localhost:3001
pnpm dev:admin
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev:customer` | Start customer portal dev server (port 3000) |
| `pnpm dev:admin` | Start admin portal dev server (port 3001) |
| `pnpm build` | Build all packages |
| `pnpm build:customer` | Build customer portal only |
| `pnpm build:admin` | Build admin portal only |
| `pnpm lint` | Lint all packages |
| `pnpm test` | Run tests across all packages |
| `pnpm clean` | Clean build artifacts |
| `pnpm format` | Format code with Prettier |

## Workspace Structure

```
fe-monorepo/
├── apps/
│   ├── customer-portal/          # Ionic + React host app (@app/customer-portal)
│   └── web-admin-portal/         # React admin app (@app/web-admin-portal)
├── modules/
│   ├── claims/                   # @app/module-claims (full reference implementation)
│   ├── policy/                   # @app/module-policy
│   ├── portfolio/                # @app/module-portfolio
│   └── payment/                  # @app/module-payment
├── packages/
│   ├── shared-ui/                # @app/shared-ui (Shared UI library)
│   ├── shared-types/             # @app/shared-types
│   ├── shared-utils/             # @app/shared-utils
│   └── shared-config/            # @app/shared-config (ESLint/Prettier)
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Clean Architecture (per module)

```
┌─────────────────────────────────────────────┐
│  Presentation (Atomic Design)               │
│  pages → templates → organisms → molecules  │
│  → atoms   +   hooks / view-models          │
├─────────────────────────────────────────────┤
│  Domain (pure TS, zero dependencies)        │
│  entities, usecases, repository interfaces  │
├─────────────────────────────────────────────┤
│  Data (implements domain interfaces)        │
│  API clients, DTOs, mappers, local storage  │
├─────────────────────────────────────────────┤
│  DI (wiring layer)                          │
│  binds data implementations → domain ports  │
└─────────────────────────────────────────────┘

Dependency rule: Presentation → Domain ← Data
               (Domain knows nothing about outer layers)
```

## Market Customization

Market repos (e.g. `id-customer-portal`) are **separate repositories** that:

1. Pin a specific version of `@app/customer-portal`
2. Override i18n locales (fallback to `en`)
3. Add/remove/replace routes via feature gates
4. Provide market-specific pages via props/slots
5. Configure build-time `.env` per environment (DEV/SIT/UAT/PROD)
6. Consume runtime feature flags from Admin Portal

## Environment Variables

Copy `.env.example` to `.env` in each app:

```bash
cp apps/customer-portal/.env.example apps/customer-portal/.env
cp apps/web-admin-portal/.env.example apps/web-admin-portal/.env
```

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend API base URL |
| `VITE_BFF_BASE_URL` | BFF (Backend for Frontend) base URL |
| `VITE_MARKET_CODE` | Market identifier (e.g. `RO`, `ID`) |
| `VITE_ENVIRONMENT` | Environment name (`development`, `sit`, `uat`, `production`) |
