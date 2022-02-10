

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-add-characther',
  templateUrl: './add-characther.component.html',
  styleUrls: ['./add-characther.component.css'],
  providers: [CharacterService]
})

export class AddCharactherComponent implements OnInit {

  characther: Character = new Character();
  charactherService: any;

  constructor(
    private router: Router, private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  saveCharacther() {
    this.characterService.save(this.characther).subscribe((data: any) => {

      console.log(data);
      this.goToCharactherList();

    })
  }

  /*
    saveNpc() {
      this.npcService.createNpc(this.npc).subscribe(data => {
        console.log(data);
        this.goToNpcList();
      },
        error => console.log(error));
    }
  */
  goToCharactherList() {
    this.router.navigate(['/characthers']);
  }

  onSubmit() {

    console.log(this.characther);

    this.saveCharacther();

  }
}