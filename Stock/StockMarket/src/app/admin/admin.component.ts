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
    this.router.navigate(['/ipo']);

  }
  navigateto()
  {
       this.router.navigate(['/importdata'])
  }

  goto()
  {
    this.router.navigate(['/companydetails'])
  }
  navigateTo()
  {
    this.router.navigate(['/stockexchange'])
  }

  goTo()
  {
    this.router.navigate(['/users'])
  }
navigate()
{
  this.router.navigate(['/companies'])
}

navigateNow()
{
  this.router.navigate(['/ipos'])
}
  ngOnInit() {
  
  }

}
