import {Component, OnInit} from '@angular/core';
import {Company} from "../company";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  data: Company[]

  constructor(private service: CompanyService) {
    this.data = []
  }

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies(): void{
    this.service.getCompanies().subscribe((company) => {
      this.data = company
      console.log(company)
      if (company.length == 0){
        console.log('Empty')
      }
    })
  }

}
