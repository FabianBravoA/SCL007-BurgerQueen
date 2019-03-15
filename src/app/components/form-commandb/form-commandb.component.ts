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

  constructor(public dataApi: DataApiService) { }

  ngOnInit() {
  }
  addCommand(){
          this.dataApi.addCommand(this.command);
  }

}
