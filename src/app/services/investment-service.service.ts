import { Injectable, signal } from '@angular/core';
import { InvestmentInput, InvestmentResponse } from '../types/investment-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  results = signal<InvestmentResponse[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {

    const { initialInvestment,
      annualInvestment,
      expectedReturn,
      duration } = data;

    const annualData: InvestmentResponse[] = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {

      const year = i + 1;

      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;

      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    return this.results.set(annualData);
  }

  reset() {
    this.results.set(undefined);
  }
}
