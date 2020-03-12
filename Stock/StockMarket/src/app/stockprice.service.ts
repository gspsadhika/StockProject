import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockPrice } from './models/stockexchange';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  httpUrl= environment.host + `stock-exchange-service/stockexchange/`

  stockexchanges=StockPrice;

  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
  getAllStockPrice() : Observable<StockPrice[]>
{
  return this.httpClient.get<StockPrice[]>(this.httpUrl);
}

saveStockPrice(stockexchanges : StockPrice): Observable<StockPrice>{
  return this.ht.post(environment.host + `stock-exchange-service/stockexchange`, stockexchanges);
}

deleteStockPrice(id: number): Observable<StockPrice>{
  return this.ht.delete(environment.host + `stock-exchange-service/stockexchange/${id}`);
}

 updateStockPrice(stockexchanges:StockPrice):Observable<StockPrice>
 {
   return this.ht.put(environment.host + `stock-exchange-service/update-stockexchange`, stockexchanges);
 }
 getStockById(id:number):Observable<StockPrice>{
  return this.ht.get(environment.host + `stock-exchange-service/stockexchange/${id}`);
}
}
