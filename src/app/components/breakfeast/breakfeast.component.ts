import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-breakfeast',
  templateUrl: './breakfeast.component.html',
  styleUrls: ['./breakfeast.component.css']
})
export class BreakfeastComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public commands = [];
  public command = '';

  ngOnInit() {
    this.dataApi.getAllCommands().subscribe(commands =>{
      console.log('Comandas', commands);
      this.commands = commands;
    })
  }
  deleteCommand(event, command){
    this.dataApi.deleteCommand(command);
  }
}
