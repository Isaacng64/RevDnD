import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private baseURL = 'http://localhost:8086/rdnd/equipment';

  constructor(private httpClient: HttpClient) { }

  getEquipmentList(): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(`${this.baseURL}`);
  }

  getEquipmentById(id: number): Observable<Equipment> {
    return this.httpClient.get<Equipment>(`${this.baseURL}/${id}`);
  }

  createEquipment(equipment: Equipment): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/create`, equipment);
  }

  updateEquipment(id: number, equipment: Equipment): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, equipment);
  }

  deleteEquipment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
