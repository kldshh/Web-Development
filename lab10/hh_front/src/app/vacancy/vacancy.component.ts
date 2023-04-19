import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../vacancy";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  data: Vacancy[];

  constructor(private service: VacancyService) {
    this.data = []
  }


  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void{
    this.service.getVacancies().subscribe((vacancy) => {
      this.data = vacancy
      console.log(vacancy)
      if (vacancy.length == 0){
        console.log('Empty')
      }
    })
  }


}
