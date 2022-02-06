

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import {Character} from 'src/app/models/character.model';

@Component({
  selector: 'app-add-characther',
  templateUrl: './add-characther.component.html',
  styleUrls: ['./add-characther.component.css']
})

export class AddCharactherComponent implements OnInit {

  characther: Character = new Character();

  constructor(private charactherService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCharacther(data:undefined){

    //this.characther=data;

    this.charactherService.saveCharacther(this.characther);
    this.goToCharactherList();
  }

  goToCharactherList(){
    this.router.navigate(['/characthers']);
  }

  onSubmit(){
    console.log(this.characther);
  }
}