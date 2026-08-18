import React from 'react';
import { useTranslation } from 'react-i18next';

export const FeatureFlagsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('featureFlags.title')}</h1>
      <p>Manage runtime feature flags for this market.</p>
    </div>
  );
};
