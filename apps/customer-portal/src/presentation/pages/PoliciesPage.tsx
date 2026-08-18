import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@app/shared-ui';

export const PoliciesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('policies.title')}>
      <p>{t('policies.empty')}</p>
    </MainLayout>
  );
};
