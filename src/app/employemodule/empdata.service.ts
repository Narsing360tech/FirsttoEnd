import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class EmpdataService {

  constructor(private route:Router,private http:HttpClient) { }
  
   getAllEmploye():Observable<any>{
     return this.http.get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllEmployee');
   }
}
