import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes = ['Spiderman', 'Ironman', 'Capitan America', 'Hulk'];
  public removedHero = "";

  eliminarHeroe(): void {
    this.removedHero = this.heroes.pop() || "";
  }

}
