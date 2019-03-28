import { Component, OnInit } from '@angular/core';
import { DataApiService  } from '../../services/data-api.service';
import { CommandInterface } from 'src/app/models/command';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';

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
  constructor(public dataApi: DataApiService, private authService: AuthService) { }

  public isWaiter: any = null;
  public userUid: any = null;


  ngOnInit() {
    this.getCurrentUser();
    /* let sumArray: any = [];
    this.dataApi.getAllCommands().subscribe(commands =>{
      this.commands = commands;
      this.commands.map(e =>{
        let products =  e.products;
        products.map(product =>{
          sumArray.push(product.price);
          console.log(sumArray);
        })
      })
    }); */
  }
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserWaiter(this.userUid).subscribe(userRole =>{
          this.isWaiter = Object.assign({}, userRole.roles).hasOwnProperty('waiter');
        })
      }
    })
  }

  array(value: any) {
    (this.commands).push(value);
    return this.commands;
  }
  addCommand(pedido){
    console.log("PEDIDO:", pedido);
    this.dataApi.addCommand(pedido);
    console.log(this.command)
    
  }
  sum(prices){  
    prices.reduce((ac, curr) =>{
      return ac + curr;
    })
  }
 


/*   
   console.log(this.commands);
    let pr = this.commands;
    pr.map(element =>{
     total.push(element.price);     
   }) 

total.reduce((ac, cu) =>{
    console.log(ac + cu);
      return ac + cu;
    }) */

  delete(producto):void{
    let answer = confirm('¿Seguro que quiere eliminar el producto?');
    if(answer){
      this.commands.splice(producto,1)
    }
  
  }

}
