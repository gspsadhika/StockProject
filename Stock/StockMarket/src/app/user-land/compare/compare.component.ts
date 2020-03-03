import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compareCompany:FormGroup;
  submit()
  {
    console.log(this.compareCompany);
  }


  constructor() { }

  ngOnInit() {
  }



}
