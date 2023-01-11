import { Component, OnInit } from '@angular/core';
import { StudentdataserviceService } from '../studentdataservice.service';
import { University } from '../univer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  router: any;

  constructor(private user:StudentdataserviceService) { }

  public univer: University;

  ngOnInit(): void {
    this.univer=this.user.data;

    
  }

  showSuccess()
  {
    this.saveStudent();
  }

saveStudent()
{
  this.goToStudentList();
}

  goToStudentList()
  {
    this.router.navigate(['/dial']);
  }
 
 

}
