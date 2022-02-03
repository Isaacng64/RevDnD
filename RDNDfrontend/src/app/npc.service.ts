import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Npc} from './npc';


@Injectable({
  providedIn: 'root'
})
export class NpcService {


  private baseURL = "http://localhost:8086/rdnd/npcs";


  constructor(private httpClient: HttpClient) { }

  getNpcList(): Observable<Npc[]>{
    return this.httpClient.get<Npc[]>(`${this.baseURL}`);
  }

  createNpc(npc: Npc): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, npc);
  }

  getNpcById(npcId: number): Observable<Npc>{
    return this.httpClient.get<Npc>(`${this.baseURL}/${npcId}`);
  }

  updateNpc(npcId: number, npc: Npc): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${npcId}`, npc);
  }

  deleteNpc(npcId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${npcId}`);
  }
}
