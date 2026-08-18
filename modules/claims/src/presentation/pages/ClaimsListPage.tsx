import React from 'react';
import { IonList, IonItem, IonLabel, IonBadge, IonSpinner } from '@ionic/react';
import { MainLayout } from '@app/shared-ui';
import { formatDate, formatCurrency } from '@app/shared-utils';
import type { ClaimsContainer } from '../../di/container';
import { useClaims } from '../hooks/useClaims';

interface ClaimsListPageProps {
  container: ClaimsContainer;
}

const statusColorMap: Record<string, string> = {
  draft: 'medium',
  submitted: 'primary',
  in_review: 'warning',
  approved: 'success',
  rejected: 'danger',
  paid: 'success',
};

export const ClaimsListPage: React.FC<ClaimsListPageProps> = ({ container }) => {
  const { claims, loading, error } = useClaims(container);

  return (
    <MainLayout title="My Claims">
      {loading && <IonSpinner name="crescent" />}
      {error && <p style={{ color: 'var(--ion-color-danger)' }}>{error}</p>}
      <IonList>
        {claims.map((claim) => (
          <IonItem key={claim.id} routerLink={`/claims/${claim.id}`}>
            <IonLabel>
              <h2>{claim.claimNumber}</h2>
              <p>
                {claim.type} - {formatCurrency(claim.amount, claim.currency)}
              </p>
              <p>{formatDate(claim.submittedAt)}</p>
            </IonLabel>
            <IonBadge slot="end" color={statusColorMap[claim.status] ?? 'medium'}>
              {claim.status.replace('_', ' ')}
            </IonBadge>
          </IonItem>
        ))}
      </IonList>
    </MainLayout>
  );
};
