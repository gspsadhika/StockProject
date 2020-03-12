import { Injectable, Inject } from '@angular/core';
import { User } from './models/user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl = environment.host + `user-service/register/`;

  users = User;
 

constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht)
{}

getAllUsers() : Observable<User[]>
{
  return this.httpClient.get<User[]>(this.httpUrl);
}

saveUser(user : User){
  return this.ht.post( environment.host + `user-service/register/`, user);
}
deleteUser(id: number): Observable<User>{
  return this.ht.delete(environment.host + `user-service/register/${id}`);
}

 updateUser(user:User):Observable<User>
 {
   return this.ht.put(environment.host + `user-service/register/`,user);
 }
 getUserById(id:number):Observable<User>
 {
  return this.ht.get(environment.host + `user-service/register/${id}`);
 }
//  reg(){
//    return this.ht.get("http://localhost:8000/reg");
//  }

 serActivation(obj)
 {
   return this.ht.put(environment.host + `user-service/activate`,obj)
 }
LoggedIn()
{
  let user_id= localStorage.getItem('userId');
  if(user_id == null){
    return false;
  }
  else{
    return true;
  }
}

 isActivated(user:User)
 {
   if(user.active==true)
   {
     return true;
   }
 }

 isAdmin()
 {
   if(sessionStorage.getItem("userType")=="admin")
   {
     return true;
   }
   else {
     return false;
   }
 }

}