import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
     <div class="kk">
      <h1 style="color:gray">Two Way Data Binding </h1>
    <input [(ngModel)]="data" type="text">
    <button type="button" style="background-color:00ff01; color:red">Hi Type Anything</button>
     <br>
     <h1 >{{data   | titlecase }}</h1>
     </div>
  `,
  styles: [
    `.kk { text-align:center
           }`
    
  ],
  
})
export class BindingComponent implements OnInit {


  public data=" ";
  constructor() { }
   
  ngOnInit(): void {
  }

}
