import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonstersService {
  baseUrl: string = 'https://www.dnd5eapi.co/api/';

  constructor(private http: HttpClient) {}

  listMonsters(): Observable<Object> {
    return this.http.get(this.baseUrl + 'monsters');
  }

  getMonster(name : string) : Observable<Object> {
    // console.log("name is " + name);
    return this.http.get(this.baseUrl + 'monsters/' + name);
  }
}
