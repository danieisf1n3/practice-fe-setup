export interface Payment {
  id: string;
  policyId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAt: string;
}

export type PaymentMethod = 'credit_card' | 'bank_transfer' | 'e_wallet';

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
