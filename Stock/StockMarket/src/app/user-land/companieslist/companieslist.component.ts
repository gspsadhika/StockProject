import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-companieslist',
  templateUrl: './companieslist.component.html',
  styleUrls: ['./companieslist.component.css']
})
export class CompanieslistComponent implements OnInit {
  
  constructor(private companyService:CompanyService, private router:Router) { }
  companies:Company[];

  ngOnInit() {
    this.companyService.getALLCompanies().subscribe(data => {
      this.companies = data;
    });
  }
}

  