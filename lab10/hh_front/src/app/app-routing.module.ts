import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";

const routes: Routes = [
  {path: 'company', component: CompanyComponent},
  {path: 'vacancy', component: VacancyComponent},
  {path: 'company/:id', component: CompanyDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
