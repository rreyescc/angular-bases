import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = 'Spiderman'
  public edad: number = 20

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerDescripcioHeroe() {
    return `${this.nombre} - ${this.edad}`
  }

  rename (): void {
    this.nombre = 'Ironman'
  }

  changeAge (): void {
    this.edad = 10;
  }

  reset () {
    this.nombre = 'Spiderman';
    this.edad = 20;
  }



}
