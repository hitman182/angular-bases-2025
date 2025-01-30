import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent  {
  public counter:number = 10;

  sumar( num:number) {
    this.counter += num;
  }
  reset( ) {
    this.counter = 10;
  }

}
