import { Injectable, Inject } from '@angular/core';
import { Company } from './models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpUrl = environment.host + `company-service/company/`;

  companies=Company;
  
  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  getALLCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
   saveCompany(company:Company):Observable<Company>{
    //return this.httpClient.post<Company>(this.httpUrl,company);
    return this.ht.post(environment.host + `company-service/company`, company);
   }
   deleteCompany(id : number):Observable<Company>{
    //return this.httpClient.delete<Company>(this.httpUrl + id);
    return this.ht.delete(environment.host + `company-service/company/${id}`);
  }
  updateCompanyInfo(company:Company):Observable<Company>{
    //return this.httpClient.put<Company>(this.httpUrl+company.id,company);
    return this.ht.put(environment.host + `company-service/update-company`,company);
  }
  getCompanyById(id:number):Observable<Company>{
   // return this.httpClient.get<Company>(this.httpUrl+id);
   return this.ht.get(environment.host + `company-service/company/${id}`)
  }
  

}
