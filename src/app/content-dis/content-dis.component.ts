import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentdataserviceService } from '../studentdataservice.service';
import { University } from '../univer';

@Component({
  selector: 'app-content-dis',
  templateUrl: './content-dis.component.html',
  styleUrls: ['./content-dis.component.scss']
})
export class ContentDisComponent implements OnInit {

  
  public data!:University 

  public user:any=[];
  
  constructor(private _usr:StudentdataserviceService,private router:Router) { 



  }

  ngOnInit(): void {

    console.log(this._usr.data);
    this.data=this._usr.data;
    this.getStudents();
  }

     private getStudents()
     {
      this._usr.getStudentList().subscribe(data => this.user=data)
     }

   update()
   {
    this.router.navigate(['/dial']);
   }

   view()
   {
    this.router.navigate(['/view']);
   }



}
