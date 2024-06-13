import { Component, Input } from "@angular/core";
import { ButtonVariant } from "./button.enum";

let buttonNumber = 0;

@Component({
  'selector': 'app-button',
  'templateUrl': './button.component.html',
  'styleUrl': './button.component.css'

})
export class ButtonComponent {
  @Input() id: string = `btn-${++buttonNumber}`;
  @Input() label: string = 'Button';
  @Input() variant: ButtonVariant = ButtonVariant.primary;

  public get classes() {
    return `button button-${this.variant}`
  }
}
