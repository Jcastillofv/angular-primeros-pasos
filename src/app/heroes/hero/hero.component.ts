import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // template: `
  //   <button class="btn btn-primary mx-2">Cambiar nombre</button>
  //   <button class="btn btn-primary">Cambiar edad</button>
  // `
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age } `;
  }

  changeHero():void {
    this.name = 'Spiderman';

  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}


