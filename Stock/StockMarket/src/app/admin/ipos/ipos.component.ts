import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/models/ipos';
import { IpoServiceService } from 'src/app/ipo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {
  ipos:IPO[];

  constructor(private IpoService:IpoServiceService, private router:Router) { }

  ngOnInit() {
    this.IpoService.getALLIPOs().subscribe(data=>
      {
        this.ipos=data;
      });
  }
  deleteIPO(id:number)
  {
    this.IpoService.deleteIPO(id).subscribe(data =>{
    this.ipos=this.ipos.filter(u => u.id!=id)
    });
  }

updateIPO(ipos:IPO)
{
  localStorage.removeItem('ipoid');
   localStorage.setItem('ipoid', ipos.id.toString());
   this.router.navigate(['/update-ipo']);
}
}
