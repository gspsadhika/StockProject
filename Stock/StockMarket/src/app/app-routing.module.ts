import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from'./form/register/register.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { UserLandComponent } from './user-land/user-land.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { IpoComponent } from './admin/ipo/ipo.component';
import { CompanydetailsComponent } from './admin/companydetails/companydetails.component';
import { CompareComponent } from './user-land/compare/compare.component';
import { CompareSecComponent } from './user-land/compare-sec/compare-sec.component';
import { IposComponent } from './admin/ipos/ipos.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ActivateComponent } from './activate/activate.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { StockexchangeComponent } from './admin/stockexchange/stockexchange.component';
import { StockexchangesComponent } from './admin/stockexchanges/stockexchanges.component';
import { UpdateStockexchangeComponent } from './admin/update-stockexchange/update-stockexchange.component';
import { PageComponent } from './page/page.component';
import { ChartsComponent } from './charts/charts.component';




const routes: Routes = [
 
 {path:"home", component:HomeComponent}, 
 {path:"", component:HomeComponent},
 {path: "register",component:RegisterComponent},
 {path: "login", component:LoginComponent},
 {path: "users", component: UsersComponent},
 {path: "admin", component:AdminComponent},
 {path: "update", component:UpdateComponent},
 {path: "userLand", component:UserLandComponent},
 {path: "importdata", component:ImportdataComponent},
 {path:"companydetails", component:CompanydetailsComponent},
 {path: "admin/importdata", component:ImportdataComponent},
 
 {path: "ipo", component:IpoComponent},
 {path: "compare", component:CompareComponent},
 {path: "comparesec", component:CompareSecComponent},
 {path:"ipos", component:IposComponent},
 {path:"update-ipo", component:UpdateIpoComponent},
 {path:"update-company", component:UpdateCompanyComponent},
 {path:"activate", component:ActivateComponent},
 {path:"companies", component:CompaniesComponent},
 {path:"stockexchange", component:StockexchangeComponent},
 {path:"stockexchanges", component:StockexchangesComponent},
 {path:"update-stockexchange", component:UpdateStockexchangeComponent},
 {path:"page", component:PageComponent},
 {path:"charts", component:ChartsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
