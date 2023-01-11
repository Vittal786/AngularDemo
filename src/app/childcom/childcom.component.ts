import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.scss']
})
export class ChildcomComponent implements OnInit {


    @Input() public  EmployeeName:string;
    @Input()  public EmployeeObj:any;

    childdata:string ="data from child component";
   
    @Output() childstring : EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
   // console.log(JSON.stringify(this.EmployeeObj))
  }

  SendData()
  {
    this.childstring.emit(this.childdata);
  }

}
