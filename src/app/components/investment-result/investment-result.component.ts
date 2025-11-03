import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentResponse } from '../../types/investment-input.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (investmentData.length === 0) {
      <p class="center">Please enter some values and press the "Calculate" button.</p>
    } @else {
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
          <td>{{ data.interest | currency:'USD':true }}</td>
          <td>{{ data.valueEndOfYear | currency:'USD':true }}</td>
          <td>{{ data.annualInvestment | currency:'USD':true }}</td>
          <td>{{ data.totalInterest | currency:'USD':true }}</td>
          <td>{{ data.totalAmountInvested | currency:'USD':true }}</td>
        </tr>
      </tbody>
    </table>
    }
  `,
  styleUrl: './investment-result.css'
})
export class InvestmentResultComponent {
  @Input() investmentData: Array<InvestmentResponse> = [];
}
