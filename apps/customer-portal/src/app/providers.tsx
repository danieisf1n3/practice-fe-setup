import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  // Add context providers here (auth, theme, feature flags, etc.)
  return <>{children}</>;
};
