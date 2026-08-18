import React from 'react';
import { useTranslation } from 'react-i18next';

export const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      <p>Admin dashboard overview</p>
    </div>
  );
};
