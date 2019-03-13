import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CommandInterface } from '../../models/command';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private commands: CommandInterface = {};
  ngOnInit() {
    this.getListCommands();
  }
  getListCommands(){
    this.dataApi.getAllCommands().subscribe(commands => {
      
    });
  }
}
