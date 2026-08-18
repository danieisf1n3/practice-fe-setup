import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@app/shared-ui';

export const PaymentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('payments.title')}>
      <p>{t('payments.history')}</p>
    </MainLayout>
  );
};
