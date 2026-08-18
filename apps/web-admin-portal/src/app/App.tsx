import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '../presentation/templates/AdminLayout';
import { DashboardPage } from '../presentation/pages/DashboardPage';
import { FeatureFlagsPage } from '../presentation/pages/FeatureFlagsPage';
import { AuditLogPage } from '../presentation/pages/AuditLogPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/feature-flags" element={<FeatureFlagsPage />} />
          <Route path="/audit-log" element={<AuditLogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
