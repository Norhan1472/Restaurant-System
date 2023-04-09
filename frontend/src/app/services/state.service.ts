import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  baseLink = "http://localhost:8080/state/api/v1/";
  constructor(private http:HttpClient) { }

  getAllStates():Observable<State[]>{
    return this.http.get<State[]>(`${this.baseLink}allStates`).pipe(
      map(
        response=>response
      )
    )
  }
  getStatesByCountryId(id:number):Observable<State[]>{
    return this.http.get<State[]>(`${this.baseLink}statesByCountryId?id=${id}`).pipe(
      map(
        response=>response
      )
    )
  }
}
