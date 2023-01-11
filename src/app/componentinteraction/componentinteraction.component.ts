import { Component, OnInit ,EventEmitter, Input, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'app-componentinteraction',
  template: `
    <h1>{{msgfromparent}}</h1>

    <button (click)="fireEvent()"> click me </button>
  `,
  styles: [
  ]
})
export class ComponentinteractionComponent implements OnInit {

  @Input() public msgfromparent: any;    

   @Output() public child=new EventEmitter();
  
 
  constructor() { }

  ngOnInit(): void {
  }
fireEvent()
{
  this.child.emit("this is from child");
}
}