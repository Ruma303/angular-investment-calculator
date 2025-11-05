import { Component } from '@angular/core';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { InvestmentResponse } from './types/investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main>
    <app-header-component />
    <app-user-input />
    <app-investment-result />
  </main>
  `,
  imports: [HeaderComponentComponent, UserInputComponent, InvestmentResultComponent]
})
export class AppComponent {}
