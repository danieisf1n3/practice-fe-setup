# Customer Portal

Ionic + React mobile-first application for App customers.

## Features

- Tab-based navigation (Home, Policies, Payments, Profile)
- Micro-FE modules loaded from `@app/module-*` packages
- i18next localization (market repos override locales)
- Feature flag support (build-time + runtime)

## Development

```bash
# From monorepo root
pnpm dev:customer

# Or from this directory
pnpm dev
```

Runs on **http://localhost:3000**

## Structure

```
src/
├── app/
│   ├── App.tsx              # Ionic shell + tab routing
│   └── providers.tsx        # Context providers (auth, theme, etc.)
├── config/
│   └── env.ts               # Environment config
├── i18n/
│   ├── index.ts             # i18next setup
│   └── locales/en.json      # Base English translations
├── presentation/
│   └── pages/               # App-level pages
│       ├── HomePage.tsx
│       ├── PoliciesPage.tsx
│       ├── PaymentsPage.tsx
│       └── ProfilePage.tsx
└── vite-env.d.ts
```

## Tech Stack

- React 19 + TypeScript
- Ionic 8 + Ionic React Router (react-router v5)
- Vite 6
- i18next
