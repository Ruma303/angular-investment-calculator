import { Component } from '@angular/core';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { InvestmentInput, InvestmentResponse } from './types/investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main>
    <app-header-component />
    <app-user-input
      (calculate)="onCalculateInvestmentResults($event)"
      (reset)="onResetInvestmentResults()"
    />
    <app-investment-result [investmentData]="results" />
  </main>
  `,
  imports: [HeaderComponentComponent, UserInputComponent, InvestmentResultComponent]
})
export class AppComponent {

  results: Array<InvestmentResponse> = [];

  onCalculateInvestmentResults(event: InvestmentInput) {
    this.calculateInvestmentResults(event);
    console.log('Calculated results:', this.results);
  }

  calculateInvestmentResults(data: InvestmentInput) {

    const { initialInvestment,
      annualInvestment,
      expectedReturn,
      duration } = data;

    const annualData = [];

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

    this.results = annualData;
  }

  onResetInvestmentResults() {
    this.results = [];
  }
}
