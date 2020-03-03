import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
   msg;
  
  constructor(@Inject(UserService) private ser) { }

  ngOnInit() {
    this.checkActivation()
  }
  checkActivation()
  {
    var urlad= document.URL;
    var strarr=urlad.split("?")
    var str= strarr[1]
    str=str.substring(0, str.length-1);
    this.ser.serActivation({email:str}).subscribe(dt=>{
      if(dt.result==1){
      this.msg="Activation Successful, Now you can login to the site and continue"
    }
  else
  {
    this.msg="Already Activated"
  }
  })

}
}
