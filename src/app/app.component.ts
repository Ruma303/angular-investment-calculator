import { Component } from '@angular/core';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { UserInputComponent } from './components/user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponentComponent, UserInputComponent]
})
export class AppComponent {

}
