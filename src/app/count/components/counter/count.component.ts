import { Component } from "@angular/core";

@Component({
  selector: 'app-count',
  //templateUrl: './count.component.html',
  template: `
    <div class="title">{{ title }}</div>
    <p>{{ count }}</p>
    <button (click)="increaseBy(1)">+</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="decreaseBy(1)">-</button>
  `,
  styleUrl: './count.component.css'
})
export class CountComponent {
  public title: string = 'App Count';
  public count: number = 10;

  increaseBy(value: number) {
    this.count += value;
  }

  decreaseBy(value: number) {
    this.count -= value;
  }

  resetCounter() {
    this.count = 10;
  }
}
