import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../types/investment-input.model';
import { InvestmentService } from '../../services/investment-service.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form>
      <div class="input-group">
        <label for="initial-investment">Initial Investment</label>
        <input type="number" id="initial-investment" name="initial-investment"
        [(ngModel)]="enteredInitialInvestment"
        >
      </div>
      <div class="input-group">
        <label for="yearly-contribution">Yearly Contribution</label>
        <input type="number" id="yearly-contribution" name="yearly-contribution"
        [(ngModel)]="enteredAnnualInvestment">
      </div>
      <div class="input-group">
        <label for="expected-return">Expected Return</label>
        <input type="number" id="expected-return" name="expected-return"
        [(ngModel)]="enteredExpectedReturn">
      </div>
      <div class="input-group">
        <label for="years">Years</label>
        <input type="number" id="years" name="years"
        [(ngModel)]="enteredDuration">
      </div>
      <p class="buttons">
        <button (click)="onSubmit()">Calculate</button>
        <button (click)="onReset()">Reset</button>
      </p>
    </form>
  `,
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  calculate = output<InvestmentInput>();
  reset = output<void>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService) { }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }

  onReset() {
    this.investmentService.reset();
  }
}
