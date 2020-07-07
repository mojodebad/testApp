import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  firstName:string;
  lastName:string;
  empID:number;
  datas:Employee[]=[];
  display:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }
  reset(){
    this.empID=0;
    this.firstName='';
    this.lastName='';
  }
  addEmployee(){
    this.datas.push(new Employee(this.empID,this.firstName,this.lastName));
    console.log("our data",JSON.stringify(this.datas));
    this.reset()
  }
  deleteEmployee(){
    this.datas.pop();
  }
}
