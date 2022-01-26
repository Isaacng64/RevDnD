import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonstersService } from '../_services/monsters.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']

})
export class MonsterComponent implements OnInit {

  listMonsters!: Observable<any>;

  constructor(private monstersService: MonstersService) { }

  ngOnInit(): void {
    this.listMonsters = this.monstersService.listMonsters();
  }

}
