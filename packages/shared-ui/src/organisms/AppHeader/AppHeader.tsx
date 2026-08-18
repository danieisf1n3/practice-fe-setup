import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons } from '@ionic/react';

export interface AppHeaderProps {
  title: string;
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ title, startSlot, endSlot }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {startSlot && <IonButtons slot="start">{startSlot}</IonButtons>}
        <IonTitle>{title}</IonTitle>
        {endSlot && <IonButtons slot="end">{endSlot}</IonButtons>}
      </IonToolbar>
    </IonHeader>
  );
};
