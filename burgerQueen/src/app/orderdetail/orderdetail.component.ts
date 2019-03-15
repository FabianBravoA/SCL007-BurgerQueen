import { Component, OnInit, Input } from '@angular/core';
import { Comanda } from '../breakfastwaiter/breakfastwaiter';
import { COMANDAS } from '../breakfastlist';
import * as M from 'src/assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  @Input() comanda: Comanda[];
  orders: string[];

  constructor() {}

  ngOnInit() {
    M.Chips.init();
  }
}
