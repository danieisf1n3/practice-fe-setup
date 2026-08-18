import React from 'react';
import { IonText } from '@ionic/react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  color?: string;
  children: React.ReactNode;
}

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'small',
} as const;

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color,
  children,
}) => {
  const Tag = tagMap[variant];

  return (
    <IonText color={color}>
      <Tag>{children}</Tag>
    </IonText>
  );
};
