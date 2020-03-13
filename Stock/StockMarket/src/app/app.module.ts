import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './form/register/register.component';
import {ReactiveFormsModule, FormBuilder, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { UserLandComponent } from './user-land/user-land.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { CompareComponent } from './user-land/compare/compare.component';
import { IpoComponent } from './admin/ipo/ipo.component';
import { CompanydetailsComponent } from './admin/companydetails/companydetails.component';
import { IposComponent } from './admin/ipos/ipos.component';
import { CompareSecComponent } from './user-land/compare-sec/compare-sec.component';
import { HomeComponent } from './home/home.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ActivateComponent } from './activate/activate.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { StockexchangeComponent } from './admin/stockexchange/stockexchange.component';
import { UpdateStockexchangeComponent } from './admin/update-stockexchange/update-stockexchange.component';
import { StockexchangesComponent } from './admin/stockexchanges/stockexchanges.component';
import { PageComponent } from './page/page.component';
import { ChartsComponent } from './charts/charts.component';
import {HighchartsChartComponent} from 'highcharts-angular';
import { HttpInterceptorService } from './http-interceptor.service';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateprofileComponent } from './userprofile/updateprofile/updateprofile.component';
import { ChangepasswordComponent } from './userprofile/changepassword/changepassword.component';
import { CompanieslistComponent } from './user-land/companieslist/companieslist.component';
import { IposlistComponent } from './user-land/iposlist/iposlist.component';




@NgModule({
  declarations: [
AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    AdminComponent,
    UpdateComponent,
    UserLandComponent,
    ImportdataComponent,
    CompareComponent,
    IpoComponent,
    CompanydetailsComponent,      
    IposComponent,    
    CompareSecComponent, 
    HomeComponent, 
    UpdateIpoComponent, 
    UpdateCompanyComponent, 
    ActivateComponent,
    CompaniesComponent,
    StockexchangeComponent,
    UpdateStockexchangeComponent,
    StockexchangesComponent,
    PageComponent,
    ChartsComponent,
    HighchartsChartComponent,
    AdminUserComponent,
    ContactusComponent,
    LogoutComponent,
    UserprofileComponent,
    UpdateprofileComponent,
    ChangepasswordComponent,
    CompanieslistComponent,
    IposlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [UserService,
  {
provide: HTTP_INTERCEPTORS, 
useClass: HttpInterceptorService,
multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }


