import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { AddCharactherComponent } from '../components/add-characther/add-characther.component';


@Injectable(
  {
    providedIn: Character
  }
)
export class CharacterService {




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