import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { EditsComponent } from './edits/edits.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent { 

      private myNumber:number=25;
constructor()
{

}

get counter()
{
  return this.myNumber;
}

set counter(value)
{
  this.myNumber=value;
  
}
}