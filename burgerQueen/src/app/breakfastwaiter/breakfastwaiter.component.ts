import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comanda, Client } from './breakfastwaiter';
import { COMANDAS } from '../breakfastlist';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import { ComandasComponent } from '../comandas/comandas.component';

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

  comandas = COMANDAS;
  selectedComanda: Comanda;
  clientSelected: Client;
  orders: string[];
  onSelect(comanda: Comanda): void {
    this.selectedComanda = comanda;
    // this.selectedComanda = this.orders.push;
  }

  constructor() {}

  ngOnInit() {}
}
