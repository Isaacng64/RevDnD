import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonstersService {
  baseUrl: string = 'https://www.dnd5eapi.co/api/';

  constructor(private http: HttpClient) {}

  listMonsters():Observable<>
  {
    return this.http.get(this.baseUrl + 'monsters');
  }

  // getMonster() {
  //   return this.http.get(this.baseUrl + 'monsters');
  // }
}
