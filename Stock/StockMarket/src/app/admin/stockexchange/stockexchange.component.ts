import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockpriceService } from 'src/app/stockprice.service';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {
  addstockExchange:FormGroup;

  constructor(private formBuilder:FormBuilder, private stockpriceService: StockpriceService) { }

  ngOnInit() {
    this.addstockExchange=this.formBuilder.group({
      id:[],
      brief:['', Validators.required],
      address:['',Validators.required],
      });
    }
  
  addStockExchange()
  {
    this.stockpriceService.saveStockPrice(this.addstockExchange.value).subscribe(data => {
      console.log("Inserted Successfully");
  });
  }
  }
