import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Company } from '../models/company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  updateCompanyForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private companyService:CompanyService, private router:Router) { }

  ngOnInit() {
    this.updateCompanyForm=this.formBuilder.group({
    id:[''],
    companyname:['', Validators.required],
    ceo:['', Validators.required],
    bod:['', Validators.required],
    choosesector:['', Validators.required],
    turnover:['', Validators.required]

   });
   const id=localStorage.getItem('companyId');
   if(+id>0){
     this.companyService.getCompanyById(+id).subscribe(company =>{
       this.updateCompanyForm.patchValue(company);
     });
   }
 }
 
 updateTheCompany(company:Company){
   this.companyService.updateCompanyInfo(this.updateCompanyForm.value).subscribe( u => {
     this.router.navigate(['/companies']);
   });
 }
}

