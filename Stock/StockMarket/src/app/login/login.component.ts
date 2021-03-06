import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  users:User[];
  currentUser: User;  

  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router, private authService: AuthServiceService) { }

  ngOnInit() {

    this.loginForm= this.formBuilder.group({
      username: ['',  Validators.required],
      password:['', Validators.required],
             

    });
  
       this.userService.getAllUsers().subscribe(u => {
          this.users=u;
        });
        
  }


  // submit()
  // {
  //   console.log(this.loginForm.value);
  // }

 isValid()
 {
    let username = this.loginForm.get("username").value;
    let password = this.loginForm.get("password").value;;
    const result$ = this.authService.authenticate(username,password);
    result$.subscribe(data=>{
      sessionStorage.setItem('userId', data.id.toString());
    console.log(data);
    if(data.userType == "ROLE_ADMIN")
    {
       this.router.navigate(['/admin'])
      }
    else{
    this.router.navigate(['/userLand']); 
  }
  });
}
          
//     let userName = this.loginForm.controls.username.value;
//     let password = this.loginForm.controls.password.value;

//     if((userName== admin_userName) && (password== admin_password)){
//       this.router.navigate(['/admin'])
//     }
//     else{
//       if(this.login(userName, password)){
//         if(this.userService.isActivated(this.currentUser)){
//           localStorage.removeItem('userId');
//           localStorage.setItem('userId', this.currentUser.id.toString());
//           this.router.navigate(['/userLand']);             
//         }
//         else{
//           alert("please activate your account to login");
//         }

//       }
//       else{
//         alert("invalid username or password");
//         this.loginForm.reset();
//       }
//     }
//   }
//   login(userName:string, password:string) {
//     for(let user of this.users){
//       if((userName == user.username) &&(password == user.password))
//       this.currentUser=user;
//       return true;
//     }
  
//   return false;
// }
// login()
// {
//   let username= this.loginForm.get("username").
// }

}

