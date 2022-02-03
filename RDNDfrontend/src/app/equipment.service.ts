import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private baseURL = 'http://localhost:8080/rdnd/equipment';

  constructor(private httpClient: HttpClient) { }

  getEquipmentList(): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(`${this.baseURL}`);
  }
}
