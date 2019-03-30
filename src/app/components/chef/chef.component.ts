import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

    constructor(private dataApi: DataApiService) { }
    public commands = [];
    public command = '';
    
    ngOnInit() {
      this.dataApi.getAllCommands().subscribe(commands =>{
        console.log('Comandas', commands);
        this.commands = commands;
      })
    }
  
  }
