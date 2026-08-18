import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '@app/shared-ui';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('home.title')}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{t('home.greeting', { name: 'User' })}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Welcome to App Customer Portal. Manage your policies, claims, and payments.</p>
        </IonCardContent>
      </IonCard>
    </MainLayout>
  );
};
