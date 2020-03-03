import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/app/models/stockexchange';
import { StockpriceService } from 'src/app/stockprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchanges',
  templateUrl: './stockexchanges.component.html',
  styleUrls: ['./stockexchanges.component.css']
})
export class StockexchangesComponent implements OnInit {

  stockexchanges:StockPrice[];

  constructor(private stockpriceService: StockpriceService, private router: Router) { }

  ngOnInit() {
      this.stockpriceService.getAllStockPrice().subscribe(data=>
        {
          this.stockexchanges=data;
        });
    }
    deleteStockExchange(id:number)
    {
      this.stockpriceService.deleteStockPrice(id).subscribe(data =>{
      this.stockexchanges=this.stockexchanges.filter(u => u.id!=id)
      });
    }
  
  updateStockExchange(stockexchanges:StockPrice)
  {
    localStorage.removeItem('stockExchangeId');
     localStorage.setItem('stockExchangeId', stockexchanges.id.toString());
     this.router.navigate(['/update-stockexchange']);
  }

  }


