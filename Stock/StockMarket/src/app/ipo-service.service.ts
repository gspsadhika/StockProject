import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from './models/ipos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpoServiceService {
  httpUrl= environment.host + `initial-public-offering-service/ipo/`;
  ipos=IPO;

  constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht) { }

  getALLIPOs():Observable<IPO[]>{
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }

  saveIPO(ipos:IPO):Observable<IPO>{
    return this.ht.post(environment.host + `initial-public-offering-service/ipo`,ipos);
  }
  deleteIPO(id : number):Observable<IPO>{
    return this.ht.delete(environment.host + `initial-public-offering-service/ipo/${id}`);
  }
  updateIPO(ipos:IPO):Observable<IPO>{
    return this.ht.put(environment.host + `initial-public-offering-service/update-ipo`,ipos);
  }
  getIPOById(id:number):Observable<IPO>{
    return this.ht.get(environment.host + `initial-public-offering-service/ipo/${id}`);
  }
}
