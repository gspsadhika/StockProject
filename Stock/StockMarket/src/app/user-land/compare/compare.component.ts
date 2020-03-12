import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compareCompany:FormGroup;
  submit()
  {
    console.log(this.compareCompany);
  }


  constructor(private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.compareCompany = this.formBuilder.group({
      companyname:['',Validators.required],
      comparetocompany:['',Validators.required],
      companycode:['',Validators.required],
      stockexchange:['', Validators.required],
      datetime:['', Validators.required]

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
