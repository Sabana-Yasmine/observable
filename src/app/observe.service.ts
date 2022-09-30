import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ObserveService {

  constructor(private http:HttpClient) { }

  getData() : Observable<any>{
    return this.http.get("http://localhost:402/product/getallproduct")
  }
}
 