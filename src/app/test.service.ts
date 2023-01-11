import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentInterface } from './student';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http:HttpClient) { }

  public name="WEL COME TO  MARS ";
 private _url="../assets/student.json";
     
 getStudent():Observable<studentInterface[]>
     {
      return this._http.get<studentInterface[]>(this._url);
     }
}



