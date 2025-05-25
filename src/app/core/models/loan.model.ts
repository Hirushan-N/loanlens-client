export interface LoanRequestDto {
  loanAmount: number;
  interestRate: number;
  tenureMonths: number;
  monthlyIncome: number;
}

export interface LoanResultDto {
  emi: number;
  emiRatio: number;
  riskCategory: string;
  isEligible: boolean;
}
