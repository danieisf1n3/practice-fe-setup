import React from 'react';
import { IonInput } from '@ionic/react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  value?: string;
  disabled?: boolean;
  required?: boolean;
  onValueChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  disabled = false,
  required = false,
  onValueChange,
}) => {
  return (
    <IonInput
      label={label}
      labelPlacement="floating"
      placeholder={placeholder}
      type={type}
      value={value}
      disabled={disabled}
      required={required}
      onIonInput={(e) => onValueChange?.(e.detail.value ?? '')}
    />
  );
};
