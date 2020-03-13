import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compareCompany:FormGroup;
  companies:Company[];
  
  constructor(private router: Router,private formBuilder:FormBuilder, private companyService: CompanyService) { }

  ngOnInit() {
    this.compareCompany=this.formBuilder.group({
      csselect: ['',Validators.required],
      seselect: ['',Validators.required],
      cnsn: ['',Validators.required],
      ctcnsn: ['',Validators.required],
      fperiod: ['',Validators.required],
      tperiod: ['',Validators.required],
     });
     this.companyService.getALLCompanies().subscribe(data=>{
      this.companies=data;
    });
  
  }
onSubmit()
{
  this.router.navigate(["/charts"], {
    queryParams: {
      formData: JSON.stringify(this.compareCompany.value)
    }
  });
}


}
