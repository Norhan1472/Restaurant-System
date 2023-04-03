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
    return this.http.get<Order[]>(`${this.baseLink}allOrder`).pipe(
      map(
        response=>response
      )
    )}
    //http://localhost:8080/api/order/v1/allOrders?pagNum=value&size=value
    getAllOrdersWithPaging(pageNum:any,size:any):Observable<Order[]>{
      return this.http.get<Order[]>(`${this.baseLink}allOrders?pageNum=${pageNum}&size=${size}`).pipe(
        map(
          response=>response
        )
      )}
      //http://localhost:8080/api/order/v1/ordersLength
      getOrdersLength():Observable<number>{
        return this.http.get<number>(`${this.baseLink}ordersLength`).pipe(
          map(
            response=>response
          )
        )
      }
    //http://localhost:8080/api/order/v1/orderByCategoryId?id=value&pageNum=value&size=value
    getOrderByCategoryId(id:any,pageNum:any,size:any):Observable<Order[]>{
      return this.http.get<Order[]>(`${this.baseLink}orderByCategoryId?id=${id}&pageNum=${pageNum}&size=${size}`).pipe(
        map(
          response=>response
        )
      )}    
      //http://localhost:8080/api/order/v1/sizeOfOrdersByCategoryId?id=value
      getSizeOfOrdersByCategoryId(id:any):Observable<number>{
        return this.http.get<number>(`${this.baseLink}sizeOfOrdersByCategoryId?id=${id}`).pipe(
          map(
            response=>response
          )
        )
      }
    //http://localhost:8080/api/order/v1/orderByKey?key=value&pageNum=value&size=value
    getOrderByKey(key:any,pageNum:any,size:any):Observable<Order[]>{
      return this.http.get<Order[]>(`${this.baseLink}orderByKey?key=${key}&pageNum=${pageNum}&size=${size}`);
    }
    //http://localhost:8080/api/order/v1/sizeOfOrdersByKey?key=value
    getSizeOfOrdersByKey(word:any):Observable<number>{
      return this.http.get<number>(`${this.baseLink}sizeOfOrdersByKey?key=${word}`);
    }
    //http://localhost:8080/api/order/v1/orderById?id=1
    getOrderById(id:any):Observable<Order>{
      return this.http.get<Order>(`${this.baseLink}orderById?id=${id}`)
    }
}
