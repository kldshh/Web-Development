import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000/api/vacancy/'
  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}`)
  }

  getVacancyByCompany(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/company/${id}/vacancy/`)
  }

}
