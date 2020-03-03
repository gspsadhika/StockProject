import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockPrice } from './models/stockexchange';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  httpUrl='http://localhost:8080/stockexchange/';

  stockexchanges=StockPrice;

  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
  getAllStockPrice() : Observable<StockPrice[]>
{
  return this.httpClient.get<StockPrice[]>(this.httpUrl);
}

saveStockPrice(stockexchanges : StockPrice): Observable<StockPrice>{
  return this.ht.post(this.httpUrl , stockexchanges);
}

deleteStockPrice(id: number): Observable<StockPrice>{
  return this.ht.delete(`http://localhost:8080/stockexchange/${id}`);
}

 updateStockPrice(stockexchanges:StockPrice):Observable<StockPrice>
 {
   return this.ht.put(`http://localhost:8080/update-stockexchange`, stockexchanges);
 }
 getStockById(id:number):Observable<StockPrice>{
  return this.ht.get(`http://localhost:8080/stockexchange/${id}`);
}
}
