import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockpriceService } from 'src/app/stockprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stockexchange',
  templateUrl: './update-stockexchange.component.html',
  styleUrls: ['./update-stockexchange.component.css']
})
export class UpdateStockexchangeComponent implements OnInit {
  updatestockExchange:FormGroup;

  constructor(private formBuilder:FormBuilder, private stockpriceService: StockpriceService, private router:Router) { }

  ngOnInit() {
    this.updatestockExchange=this.formBuilder.group({
      id:[],
      choosestock:['', Validators.required],
      brief:['', Validators.required],
      address:['', Validators.required]
      
    });

    const id=localStorage.getItem('stockExchangeId');
    if(+id>0){
      this.stockpriceService.getStockById(+id).subscribe(data =>{
        this.updatestockExchange.patchValue(data);
      });
    }
  }
  updateStockExchange(){
    this.stockpriceService.updateStockPrice(this.updatestockExchange.value).subscribe( data => {
      this.router.navigate(['stockexchanges']);
    });
  }
}