import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from './univer';

@Injectable({
  providedIn: 'root'
})
export class StudentdataserviceService {

   private baseURL="../assets/studentdata.json";

  constructor(private httpclient1:HttpClient) { }
getStudentList():Observable<University[]>
{
  return this.httpclient1.get<University[]>(`${this.baseURL}`);
}

public data:University=new University

    createStudent(user:University): Observable<University>
    {
      console.log(user.email)
       this.data.firstname=user.firstname;
       this.data.lastname=user.lastname;
       this.data.email=user.email;
       this.data.phone=user.phone;
        this.data.address=user.address;
        this.data.gender=user.gender;
        this.data.dob=user.dob;
        this.data.college=user.college;

       console.log(this.data)
      
       return this.httpclient1.post<University>(`${this.baseURL}`, user);
    ;
      }

}
