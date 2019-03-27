import { Component, OnInit } from '@angular/core';
import { DataApiService  } from '../../services/data-api.service';
import { CommandInterface } from 'src/app/models/command';

@Component({
  selector: 'app-form-commandb',
  templateUrl: './form-commandb.component.html',
  styleUrls: ['./form-commandb.component.css']
})
export class FormCommandbComponent implements OnInit {

list: any;  
command = {} as CommandInterface;

breakfeastList: Array<any> = [
  {product: 'Café con Leche', price: 700},
  {product: 'café Americano', price: 500},
  {product: 'Jugo Natural', price: 700},
  {product: 'Sandwich de Jamón y Queso', price: 1000}
];
commands: any =[ {
    
}];
  constructor(public dataApi: DataApiService) { }

  ngOnInit() {
  }
  addCommand(){
    this.dataApi.addCommand(this.command);
    alert('Comanda enviada a cocina Correctamente!')
  }
  array(value: any) {
    (this.commands).push(value);
    console.log(this.commands);
  }
  delete(producto):void{
    let answer = confirm('¿Seguro que quiere eliminar el producto?');
    if(answer){
      this.commands.splice(producto,1)
    }
  }

}
