import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comanda, Client } from './breakfastwaiter';
import { PRODUCTS } from '../breakfastlist';

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

  products = PRODUCTS;
  comandaSelected: Comanda;

  onSelect(comanda: Comanda): void {
    this.comandaSelected = comanda;
  }

  constructor() {}

  ngOnInit() {}
}
