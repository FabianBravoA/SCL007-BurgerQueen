import { Component, OnInit } from '@angular/core';
import { DataApiService  } from '../../services/data-api.service';
import { CommandInterface } from 'src/app/models/command';

@Component({
  selector: 'app-form-commandb',
  templateUrl: './form-commandb.component.html',
  styleUrls: ['./form-commandb.component.css']
})
export class FormCommandbComponent implements OnInit {

command = {} as CommandInterface;

breakfeastList: Array<any> = [
  {product: 'Café con Leche', price: 700},
  {product: 'café Americano', price: 500},
  {product: 'Jugo Natural', price: 700},
  {product: 'Sandwich de Jamón y Queso', price: 1000}
];

  constructor(public dataApi: DataApiService) { }

  ngOnInit() {
  }
  addCommand(){
          this.dataApi.addCommand(this.command);
  }

}
