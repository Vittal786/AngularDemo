import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
 import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentdataserviceService } from '../studentdataservice.service';
import {University} from '../univer';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

 

 

 

  // messageService: any;
  // configService: any;
     // config!: { heroesUrl: any; textfile: any; date: any; };
   


      constructor(private fb:FormBuilder,
        private router:Router,
        private service:StudentdataserviceService
        ) { }

 userForm:FormGroup=new FormGroup({

  firstname:new FormControl(''),
              lastname:new FormControl(''),
              address:new FormControl(''),
              gender:new FormControl(''),
              email:new FormControl(''),
              dob:new FormControl(''),
              phone:new FormControl(''),
              college:new FormControl(''),
          
 });



  ngOnInit(): void {
    
 


  this.userForm=this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
     address:['',Validators.required],
     college:['',Validators.required],
     gender:['',Validators.required],
     email:['',Validators.required],
     dob: ['', Validators.required],
     phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // email: ['', [Validators.required, Validators.email]],
      // acceptTerms: [false, Validators.requiredTrue],
    },);
  }

  City: any = ['Adoamon', 'KeyStone', 'Hermes', 'Mean Machine','Velacityadptors','Atlas','DBE','Sea Otters']



  submitted=false;
  

// addUser(){
//   console.log(this.userForm.value);
// }
 
  onSubmit():void
  {
this.submitted=true;

this.service.createStudent(this.userForm.value)


  
  console.log(JSON.stringify(this.userForm.value,null,2));

    this.saveStudent();
}

onReset(): void {
  this.submitted = false;
  this.userForm.reset();
}


saveStudent()
{
  this.goToStudent();
}
goToStudent()
{
this.router.navigate(['/contentd']);
}
}