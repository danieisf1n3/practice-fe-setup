import React from 'react';
import { useTranslation } from 'react-i18next';

export const AuditLogPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('auditLog.title')}</h1>
      <p>View audit logs for feature flag changes and admin actions.</p>
    </div>
  );
};
