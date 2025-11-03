import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentInput } from '../../types/investment-input.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Please enter some values and press the "Calculate" button.
    </p>

    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Value End of Year</th>
          <th>Annual Investment</th>
          <th>Total Interest</th>
          <th>Total Amount Invested</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of investmentData">
          <td>{{ data.year }}</td>
          <td>{{ data.interest }}</td>
          <td>{{ data.valueEndOfYear }}</td>
          <td>{{ data.annualInvestment }}</td>
          <td>{{ data.totalInterest }}</td>
          <td>{{ data.totalAmountInvested }}</td>
        </tr>
      </tbody>
  `,
  styleUrl: './investment-result.css'
})
export class InvestmentResultComponent {
  @Input() investmentData: Array<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }> = [];
}
