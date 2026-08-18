export interface Claim {
  id: string;
  policyId: string;
  claimNumber: string;
  type: ClaimType;
  status: ClaimStatus;
  amount: number;
  currency: string;
  description: string;
  submittedAt: string;
  updatedAt: string;
}

export type ClaimType = 'medical' | 'dental' | 'vision' | 'life' | 'disability';

export type ClaimStatus = 'draft' | 'submitted' | 'in_review' | 'approved' | 'rejected' | 'paid';
