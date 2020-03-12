import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:User;
  constructor(private router: Router, private userService:UserService,authService:AuthServiceService) { }
    ngOnInit() {
      const id = sessionStorage.getItem('userId');
      if(+id >0 ){
      this.userService.getUserById(+id).subscribe(data =>{
        this.user=data;
      });
    }
    }
    updateUser(){
      this.router.navigate(['/updateprofile']);
    }
    updatePassword(){
      this.router.navigate(['/changepassword']);
    }
}
