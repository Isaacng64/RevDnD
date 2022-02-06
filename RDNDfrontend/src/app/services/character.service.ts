import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Character } from '../models/character.model';


@Injectable(
{
  providedIn: Character,
}
)
export class CharacterService {
  httpClient: any;
  saveCharacther(characther: Character) {
    throw new Error('Method not implemented.');
  }
  createCharacther(characther: any) {
    throw new Error('Method not implemented.');
  }

  private charactersUrl: string;

  constructor(private http: HttpClient) {
    this.charactersUrl = 'http://localhost:8086/api/v1/characters';
  }

  public findAll(): Observable<Character[]> {
    return this.http.get<Character[]>(
      this.charactersUrl
      );
  }

  public createNpc(character: Character): Observable<Object>{
    return this.httpClient.post(`${this.charactersUrl}`, character);
  }
  public getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(
      this.charactersUrl
      );
  }

  public save(character: Character) {
    return this.http.post<Character>(this.charactersUrl, character);
  }
}