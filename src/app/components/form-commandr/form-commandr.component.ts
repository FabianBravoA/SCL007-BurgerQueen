import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-commandr',
  templateUrl: './form-commandr.component.html',
  styleUrls: ['./form-commandr.component.css']
})
export class FormCommandrComponent implements OnInit {

  resOfTheDayList: Array<any> = [
    {product: 'Hamburguesa simple de Pollo', price: 1500},
    {product: 'Hamburguesa simple de Res', price: 1500},
    {product: 'Hamburguesa simple Vegetariana', price: 1500},
    {product: 'Hmaburguesa doble de Pollo', price: 2500},
    {product: 'Hamburguesa doble de Res', price: 2500},
    {product: 'Hamburguesa doble vegetariana', price: 2500},
    {product: 'Queso', price: 500},
    {product: 'huevo', price: 500},
    {product: 'Papas Fritas', price: 500},
    {product: 'Onion Rings', price: 500},
    {product: 'Agua - 500ml', price: 500},
    {product: 'Agua - 750ml', price: 800},
    {product: 'Gaseosa - 500ml', price: 700},
    {product: 'Gaseosa - 750ml', price: 1000}
  ]
  constructor() { }

  ngOnInit() {
  }

}
