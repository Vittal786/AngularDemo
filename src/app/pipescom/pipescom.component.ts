import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipescom',
  templateUrl: './pipescom.component.html',
  styleUrls: ['./pipescom.component.scss']
})
export class PipescomComponent implements OnInit {

    public name="mars tel";
    public date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
