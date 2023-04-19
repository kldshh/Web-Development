import { Injectable } from '@angular/core';
import  {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "./company";
import {Vacancy} from "./vacancy";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/api/company/'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}`)
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`http://127.0.0.1:8000/api/company/${id}/`)
  }

}
