import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-eventbin',
  template: `
   <h1 style="font-size: 20px;">{{greeting | titlecase}}</h1>
   <button (click) ="onClick()" type="button">click me</button>
   
  `,
  styles: [
    
    
  ]
  
})
export class EventbinComponent implements OnInit {
  public greeting="";
  constructor() { }

  ngOnInit(): void {
  }
  onClick()
{
 this.greeting=
 ("Component interaction means parent component interacts with child component using @Input decorator & child component interacts with parent component using @output decorator ");
}

}
