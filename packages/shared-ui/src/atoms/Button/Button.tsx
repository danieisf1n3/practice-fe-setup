import React from 'react';
import { IonButton } from '@ionic/react';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'default',
  disabled = false,
  onClick,
}) => {
  const fillMap = {
    primary: 'solid',
    secondary: 'solid',
    outline: 'outline',
  } as const;

  const sizeMap = {
    small: 'small',
    default: 'default',
    large: 'large',
  } as const;

  return (
    <IonButton
      fill={fillMap[variant]}
      size={sizeMap[size]}
      disabled={disabled}
      onClick={onClick}
      color={variant === 'secondary' ? 'secondary' : 'primary'}
    >
      {label}
    </IonButton>
  );
};
