import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  
  companydetailsForm : FormGroup;
  submit()
  {
    console.log(this.companydetailsForm.value);
  }

  constructor(private formBuilder:FormBuilder, private companyService:CompanyService, private router: Router){}

  ngOnInit() {
    this.companydetailsForm=this.formBuilder.group({
      id:['',Validators.required],
      companyname:['',Validators.required],
      companyCode:['', Validators.required],
      turnover:['',Validators.required],
      ceo:['',Validators.required],
      choosesector:['',Validators.required],
      bod:['', Validators.required]
      
  });

  }
  addCompany(){
    this.companyService.saveCompany(this.companydetailsForm.value).subscribe(data =>{
     console.log('Company Inserted Successfully');
   this.router.navigate(['/companies']);
     });
   }
}
