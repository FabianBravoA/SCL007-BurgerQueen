import { Component, OnInit, Input } from '@angular/core';
import { Comanda, Client } from './breakfastwaiter';

@Component({
  selector: 'app-breakfast-waiter',
  templateUrl: './breakfastwaiter.component.html',
  styleUrls: ['./breakfastwaiter.component.css']
})
export class WaiterComponent implements OnInit {
  client: Client = {
    id: 1,
    name: ''
  };
  addProduct: Comanda;
  onSelect(comanda: Comanda): void {
    console.log('Click');
    console.log(this.addProduct);
    this.addProduct = comanda;
  }

  constructor() {}

  ngOnInit() {}
}
// export class ComandaList {
//   selected
//   products : any []
// }
