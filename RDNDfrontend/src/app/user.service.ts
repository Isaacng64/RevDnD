import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
//import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8086/api/v1";
  constructor(private httpClient: HttpClient) { }
  register(username: string, password:string, email:string, phone: string): Observable<String>
  {
    let p=new HttpParams();
    p = p.append("username", username);
    p = p.append("password", password);
    p = p.append("email", email);
    p = p.append("phone", phone);
    return this.httpClient.get<String>(this.baseURL+'/register',{params: p});
  }
  /*
  update(id: number,username: string, password:string, email:string, phone: string): Observable<String>
  {
    let u:User = new User(id, username,password,email,phone);
   let body={user: u}

    return this.httpClient.post<String>(this.baseURL+'/updateuser',body);
  }
  */
}
