import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { studentInterface } from '../student';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.scss']
})
export class HttpserviceComponent implements OnInit {

  public stu :any[]=[];

  constructor(private _stdservice:TestService) { }

  ngOnInit(){
    this._stdservice.getStudent().subscribe(data =>this.stu = data);
  }

}
