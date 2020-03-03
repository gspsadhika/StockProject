import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compare-sec',
  templateUrl: './compare-sec.component.html',
  styleUrls: ['./compare-sec.component.css']
})
export class CompareSecComponent implements OnInit {
  compareSector:FormGroup;
  submit()
  {
    console.log(this.compareSector);
  }


  constructor() { }

  ngOnInit() {
  }

}
