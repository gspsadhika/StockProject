import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { DefaultUrlSerializer } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService ) { }

  ngOnInit() {
    this.registerForm= this.formBuilder.group({
      id:[],
      username:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      mobile:['', Validators.required]    

    });
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
onSubmit()
  {  
  this.userService.reg().subscribe(data=>
    {
      console.log("coming status::::"+data.reg);
    })
  }
}
  

