export interface Policy {
  id: string;
  policyNumber: string;
  productName: string;
  status: PolicyStatus;
  startDate: string;
  endDate: string;
  premium: number;
  currency: string;
}

export type PolicyStatus = 'active' | 'expired' | 'pending' | 'cancelled';
