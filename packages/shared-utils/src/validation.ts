export const isEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isRequired = (value: unknown): boolean =>
  value !== null && value !== undefined && value !== '';

export const minLength = (value: string, min: number): boolean => value.length >= min;

export const maxLength = (value: string, max: number): boolean => value.length <= max;
