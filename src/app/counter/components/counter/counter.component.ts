import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counte }}  </h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reseteCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent{
  public counte:number = 10;
  increaseBy( value:number ):void {
    this.counte += value;
  }

  reseteCounter():void {
    this.counte = 10;
  }
}
