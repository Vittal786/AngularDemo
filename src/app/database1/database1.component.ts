import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-database1',
  templateUrl: './database1.component.html',
  styleUrls: ['./database1.component.scss']
})
export class Database1Component implements OnInit {

  form:any;
  constructor(private router:Router,
    private route:ActivatedRoute) { 

    this.form=new FormGroup(
      {
         firstname:new FormControl('',Validators.required),
         lastname:new FormControl('',Validators.required),
         phoneNumber:new FormControl('',Validators.required),
         mail:new FormControl('',Validators.required)
      }
    )
  }

  ngOnInit(): void {
  }



  saveCall()
  {
    let data:any=this.form.value;
    this.router.navigate(['/dbase'],
    {
      queryParams:{data:JSON.stringify(data)}
    })
  }
}
