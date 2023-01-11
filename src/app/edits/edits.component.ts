import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.scss']
})
export class EditsComponent implements OnInit {

  constructor(private ts:TestService) { }
    nam=this.ts.name
  ngOnInit(): void {
  }

}
