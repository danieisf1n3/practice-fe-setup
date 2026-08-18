import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/feature-flags', label: 'Feature Flags' },
  { path: '/audit-log', label: 'Audit Log' },
];

export const AdminLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 240, background: '#1a1a2e', color: '#fff', padding: 16 }}>
        <h2 style={{ marginBottom: 24 }}>App Admin</h2>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'block',
                padding: '10px 12px',
                color: location.pathname === item.path ? '#4fc3f7' : '#ccc',
                textDecoration: 'none',
                borderRadius: 6,
                marginBottom: 4,
                background: location.pathname === item.path ? 'rgba(79,195,247,0.1)' : 'transparent',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 24, background: '#f5f5f5' }}>
        <Outlet />
      </main>
    </div>
  );
};
