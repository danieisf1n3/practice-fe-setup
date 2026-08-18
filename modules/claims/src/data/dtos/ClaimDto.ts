export interface ClaimDto {
  id: string;
  policy_id: string;
  claim_number: string;
  type: string;
  status: string;
  amount: number;
  currency: string;
  description: string;
  submitted_at: string;
  updated_at: string;
}
