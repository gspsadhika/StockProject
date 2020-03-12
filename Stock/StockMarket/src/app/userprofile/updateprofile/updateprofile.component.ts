import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  updateProfileForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.updateProfileForm = this.formBuilder.group({
      id: [''],
      username:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],    
      password:[],
      confirmPassword:[],
      mobile: ['', Validators.required],
      active:['']
    });
    const id = sessionStorage.getItem('userId');
    if(+id)
    {
    this.userService.getUserById(+id).subscribe(user => {
      this.updateProfileForm.patchValue(user);
    });
  }
}
updateTheUser(){
  this.userService.updateUser(this.updateProfileForm.value).subscribe(u=>{
    this.router.navigate(['userprofile'])
  });
}


}
