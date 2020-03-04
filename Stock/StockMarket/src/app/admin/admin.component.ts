import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  moveto(){
    this.router.navigate(['/admin/ipo']);

  }
  navigateto()
  {
       this.router.navigate(['/admin/importdata'])
  }

  goto()
  {
    this.router.navigate(['/admin/companydetails'])
  }
  navigateTo()
  {
    this.router.navigate(['/admin/stockexchange'])
  }

  ngOnInit() {
  
  }

}
