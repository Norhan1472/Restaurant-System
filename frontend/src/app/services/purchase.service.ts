import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseRequest } from '../model/purchase-request';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  baseLink = "http://localhost:8080/api/purchase/v1/";
  
  constructor(private http:HttpClient) { }
  
  makeOrder(purchaseRequest:PurchaseRequest):Observable<any>{
    return this.http.post<any>(`${this.baseLink}makeOrder`,purchaseRequest).pipe(
      map(
        response=>response
      )
    )
  }

}
