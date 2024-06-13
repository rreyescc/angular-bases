import { Component } from '@angular/core';
import { ButtonVariant } from '../common/components/button/button.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'App';
  public variant: ButtonVariant = ButtonVariant.info;

}
