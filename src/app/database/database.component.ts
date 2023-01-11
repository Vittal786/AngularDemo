import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
     data:any;
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {


    this.route.queryParams.subscribe((params)=>{

      console.log(params);
      this.data=JSON.parse(params['data']);
    })
  }

}
