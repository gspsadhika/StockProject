import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoServiceService } from 'src/app/ipo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  updateIpo:FormGroup;

  constructor(private formBuilder:FormBuilder, private Iposervice: IpoServiceService, private router: Router) { }

  ngOnInit() {
    this.updateIpo=this.formBuilder.group({
      id:[''],
      companyname:['', Validators.required],
      stockexchange:['', Validators.required],
      price:['', Validators.required],
      totalnoofshares:['', Validators.required],
      opendatetime:['', Validators.required],
      remarks:['', Validators.required]    

    });
    const id=localStorage.getItem('ipoid');
    if(+id>0){
      this.Iposervice.getIPOById(+id).subscribe(ipo =>{
        this.updateIpo.patchValue(ipo);
      });
    }
  }
  updateIpoFun(){
    this.Iposervice.updateIPO(this.updateIpo.value).subscribe( data => {
      this.router.navigate(['ipos']);
    },
    error=> {
      alert(error);
    });
  }
}