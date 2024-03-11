import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModule } from './auth.module';
import { Observable } from 'rxjs';

@Injectable( )
export class DataService {

  apiurl='https://jsonplaceholder.typicode.com/todos/'
  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    return this.http.get(this.apiurl);
  }

}
