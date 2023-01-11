import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcom',
  templateUrl: './parentcom.component.html',
  styleUrls: ['./parentcom.component.scss']
})
export class ParentcomComponent implements OnInit {
  


     public  Ename :string="Mars Telcom";

       public  EmployeeObj={
        Ecode:1001,
        Ename:"Sakhi",
        Salary:2000
             }

             receive(event:string)
             {
              console.log(event);
              this.childdatarecieved =event;
             }
     
                childdatarecieved : string="";
            constructor() { }


  ngOnInit(): void {
  }

}
