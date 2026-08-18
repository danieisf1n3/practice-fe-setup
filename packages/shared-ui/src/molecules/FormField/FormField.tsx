import React from 'react';
import { IonItem } from '@ionic/react';
import { Input, type InputProps } from '../../atoms/Input';

export interface FormFieldProps extends InputProps {
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ error, ...inputProps }) => {
  return (
    <div>
      <IonItem>
        <Input {...inputProps} />
      </IonItem>
      {error && (
        <p style={{ color: 'var(--ion-color-danger)', fontSize: '0.75rem', margin: '4px 16px' }}>
          {error}
        </p>
      )}
    </div>
  );
};
