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


  public getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(
      this.charactersUrl
      );
  }

  public save(character: Character) {
    return this.http.post<Character>(this.charactersUrl, character);
  }
}