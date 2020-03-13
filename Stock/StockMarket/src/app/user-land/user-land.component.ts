import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-land',
  templateUrl: './user-land.component.html',
  styleUrls: ['./user-land.component.css']
})
export class UserLandComponent implements OnInit {

  constructor(private router:Router) { }

  navigateTo()
  {
    this.router.navigate(['/compare'])
  }

  moveTo()
  {
    this.router.navigate(['/comparesec'])
  }

  goTo()
  {
    this.router.navigate(['/userprofile'])
  }
navigate()
{
  this.router.navigate(['/companieslist'])
}

navigateNow()
{
  this.router.navigate(['/iposlist'])
}

  ngOnInit() {
  
    
  }


}
