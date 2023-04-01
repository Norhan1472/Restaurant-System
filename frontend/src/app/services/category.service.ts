import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseLink = "http://localhost:8080/api/category/v1/";

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseLink}allCategories`).pipe(
      map(
        response=>response
      )
    )
  }
}
