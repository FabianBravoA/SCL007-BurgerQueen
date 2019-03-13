import { Component, OnInit } from '@angular/core';
import { Comanda } from './breakfastwaiter';

@Component({
  selector: 'app-breakfast-waiter',
  templateUrl: './breakfastwaiter.component.html',
  styleUrls: ['./breakfastwaiter.component.css']
})
export class WaiterComponent implements OnInit {
  comanda: Comanda = {
    id: 1,
    name: ''
  };
  constructor() {}

  ngOnInit() {}
}
