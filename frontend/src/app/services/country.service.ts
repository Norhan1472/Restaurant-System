import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  baseLink="http://localhost:8080/country/api/v1/";

  constructor(private http:HttpClient) { }

  getAllCountries():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.baseLink}allCountries`).pipe(
      map(
        response=>response
      )
    )
    
  }
}
