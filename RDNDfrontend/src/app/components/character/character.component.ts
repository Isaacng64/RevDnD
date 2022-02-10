import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers:[CharacterService]
})
export class CharacterComponent implements OnInit {

   characters:any;


  constructor(private charactersService:CharacterService) { }

  getHeroes(): void  {
    this.charactersService.findAll().subscribe((data:any)=>{
      this.characters = data;
      console.log(data);
    });
  }


  ngOnInit(): void {
    this.getHeroes();
  }



}

