# @app/shared-ui (Shared UI)

Shared UI component library following **Atomic Design** principles, built with Ionic + React.

## Component Hierarchy

```
atoms/          → Smallest building blocks
├── Button      → IonButton wrapper with variants (primary/secondary/outline)
├── Input       → IonInput wrapper with floating labels
└── Typography  → IonText wrapper with semantic variants (h1-h4, body, caption)

molecules/      → Combinations of atoms
├── FormField   → Input + error message
└── SearchBar   → IonSearchbar wrapper

organisms/      → Complex UI sections
└── AppHeader   → IonHeader + IonToolbar with start/end slots

templates/      → Page-level layouts
└── MainLayout  → IonPage + AppHeader + IonContent
```

## Usage

```tsx
import { Button, MainLayout, FormField } from '@app/shared-ui';

const MyPage = () => (
  <MainLayout title="My Page">
    <FormField label="Email" type="email" error="Required" />
    <Button label="Submit" variant="primary" onClick={handleSubmit} />
  </MainLayout>
);
```

## Adding Components

1. Create a folder under the appropriate level (`atoms/`, `molecules/`, `organisms/`, `templates/`)
2. Add `ComponentName.tsx` and `index.ts`
3. Re-export from the level's `index.ts`
