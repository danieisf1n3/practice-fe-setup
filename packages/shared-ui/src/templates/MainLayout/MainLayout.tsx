import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { AppHeader } from '../../organisms/AppHeader';

export interface MainLayoutProps {
  title: string;
  headerStart?: React.ReactNode;
  headerEnd?: React.ReactNode;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  headerStart,
  headerEnd,
  children,
}) => {
  return (
    <IonPage>
      <AppHeader title={title} startSlot={headerStart} endSlot={headerEnd} />
      <IonContent className="ion-padding">{children}</IonContent>
    </IonPage>
  );
};
