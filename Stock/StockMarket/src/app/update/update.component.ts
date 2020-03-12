import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private router: Router ) { }

  ngOnInit() {
    
    this.updateForm=this.formBuilder.group({
      id:[''],
      username:['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      mobile:['', Validators.required],
      active:[''] 
    });
    const id=localStorage.getItem('userId');
    if(+id>0){
      this.userService.getUserById(+id).subscribe(user =>{
        this.updateForm.patchValue(user);
      });
    }
  }
  updateTheUser(){
    this.userService.updateUser(this.updateForm.value).subscribe( u => {
      this.router.navigate(['users']);
    });
  }
}