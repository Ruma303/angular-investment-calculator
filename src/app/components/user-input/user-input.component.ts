import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
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
      <p>
        <button>Calculate</button>
      </p>
    </form>
  `,
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log(
      this.enteredAnnualInvestment,
      this.enteredAnnualInvestment,
      this.enteredExpectedReturn,
      this.enteredDuration
    )
  }
}
