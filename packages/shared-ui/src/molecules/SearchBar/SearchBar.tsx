import React from 'react';
import { IonSearchbar } from '@ionic/react';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onSearch?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onSearch,
}) => {
  return (
    <IonSearchbar
      placeholder={placeholder}
      value={value}
      onIonInput={(e) => onSearch?.(e.detail.value ?? '')}
    />
  );
};
