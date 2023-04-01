import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseLink = "http://localhost:8080/api/order/v1/";

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseLink}allOrders`).pipe(
      map(
        response=>response
      )
    )
  }
}
