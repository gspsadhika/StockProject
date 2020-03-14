import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockpriceService } from 'src/app/stockprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {
  addstockExchange:FormGroup;

  constructor(private formBuilder:FormBuilder, private stockpriceService: StockpriceService, private router:Router) { }

  ngOnInit() {
    this.addstockExchange=this.formBuilder.group({
      id:['',Validators.required],
      choosestock:['',Validators.required],
      brief:['', Validators.required],
      address:['',Validators.required],
      });
    }
  
  addStockExchange()
  {
    this.stockpriceService.saveStockPrice(this.addstockExchange.value).subscribe(data => {
      console.log("Inserted Successfully");
      this.router.navigate(['/stockexchanges'])
  });
  }
  }
