import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from './models/ipos';

@Injectable({
  providedIn: 'root'
})
export class IpoServiceService {
  httpUrl= 'http://localhost:8002/ipo/';
  ipos=IPO;

  constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht) { }

  getALLIPOs():Observable<IPO[]>{
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }

  saveIPO(ipos:IPO):Observable<IPO>{
    return this.ht.post(this.httpUrl,ipos);
  }
  deleteIPO(id : number):Observable<IPO>{
    return this.ht.delete(`http://localhost:8002/ipo/${id}`);
  }
  updateIPO(ipos:IPO):Observable<IPO>{
    return this.ht.put(`http://localhost:8002/update-ipo`,ipos);
  }
  getIPOById(id:number):Observable<IPO>{
    return this.ht.get(`http://localhost:8002/ipo/${id}`);
  }
}
