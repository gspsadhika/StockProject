import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpoServiceService } from 'src/app/ipo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
  addipo:FormGroup;

  constructor(private formBuilder:FormBuilder, private IpoService: IpoServiceService, private router:Router) {}

  ngOnInit() {
    this.addipo=this.formBuilder.group({
      id: ['',Validators.required],
      companyname:['', Validators.required],
      stockexchange:['',Validators.required],
      price:['',Validators.required],
      totalnoofshares:['',Validators.required],
      opendatetime:['',Validators.required],
      remarks:['', Validators.required]
    });
  }

    addIPO()
    {
      this.IpoService.saveIPO(this.addipo.value).subscribe(data => {
        console.log("IPO inserted successfully");
        this.router.navigate(['/ipos'])
      });
    }
  }


