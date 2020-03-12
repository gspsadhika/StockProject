import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { DefaultUrlSerializer } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  users:User[]= [];

  constructor(private formBuilder: FormBuilder, private userService: UserService ) { }

  ngOnInit() {
    this.registerForm= this.formBuilder.group({
      id:['', Validators.required],
      username:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      mobile:['', Validators.required]    

    });
    this.userService.getAllUsers().subscribe(u => {this.users=u;});
  }
  addUser()
  {
    this.userService.saveUser(this.registerForm.value).subscribe(data => {
      console.log('User Inserted Successfully');
      if(data.res==0){
        alert("User Already Available");
      }
         else if(data.res==1){
          console.log("User Details are Entered Successfully");
          //alert("Successfully ENtered New User");
        alert("Added New User");
        }
        else{
          alert("ERROR");
        }
  });
}  

emailValid(mail : String){
  for(let user of this.users){
    if(user.email===mail){
      return false;
    }
  }
  return true;
}
onSubmit()
  {  
//   this.userService.reg().subscribe(data=>
//     {
//       console.log("coming status::::"+data.reg);
//     })
console.log(this.registerForm.value);
  }
}
  

