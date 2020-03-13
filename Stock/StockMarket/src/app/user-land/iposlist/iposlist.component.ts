import { Component, OnInit } from '@angular/core';
import { IpoServiceService } from 'src/app/ipo-service.service';
import { Router } from '@angular/router';
import { IPO } from 'src/app/models/ipos';

@Component({
  selector: 'app-iposlist',
  templateUrl: './iposlist.component.html',
  styleUrls: ['./iposlist.component.css']
})
export class IposlistComponent implements OnInit {

  ipos:IPO[];


  constructor(private IpoService:IpoServiceService, private router:Router) { }

  ngOnInit() {
    this.IpoService.getALLIPOs().subscribe(data=>
      {
        this.ipos=data;
      });
  }
}
  