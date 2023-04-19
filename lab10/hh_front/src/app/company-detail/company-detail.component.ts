import {Component, OnInit} from '@angular/core';
import  {Company} from "../company";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";
import {Vacancy} from "../vacancy";
import {VacancyComponent} from "../vacancy/vacancy.component";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  my_company: Company
  vacancies: Vacancy[]

  constructor(private route: ActivatedRoute, private service: VacancyService, private serviceCompany: CompanyService) {
    this.my_company = {} as Company;
    this.vacancies = [];
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.serviceCompany.getCompany(id).subscribe((company) => {
        this.my_company = company;
      })
      this.service.getVacancyByCompany(id).subscribe((vacancy) => {
        this.vacancies = vacancy;
      })
    })
  }
}
