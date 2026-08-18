# Web Admin Portal

React admin dashboard for managing App market configuration.

## Features

- Dashboard overview
- Runtime feature flag management (propagates to API/DB → BFF → FE)
- Audit log viewer for admin actions and feature flag changes

## Development

```bash
# From monorepo root
pnpm dev:admin

# Or from this directory
pnpm dev
```

Runs on **http://localhost:3001**

## Structure

```
src/
├── app/
│   └── App.tsx                          # Router setup
├── config/
│   └── env.ts                           # Environment config
├── i18n/
│   ├── index.ts                         # i18next setup
│   └── locales/en.json                  # Base English translations
├── presentation/
│   ├── templates/
│   │   └── AdminLayout.tsx              # Sidebar + content layout
│   └── pages/
│       ├── DashboardPage.tsx
│       ├── FeatureFlagsPage.tsx
│       └── AuditLogPage.tsx
└── vite-env.d.ts
```

## Tech Stack

- React 19 + TypeScript
- React Router v6
- Vite 6
- i18next
