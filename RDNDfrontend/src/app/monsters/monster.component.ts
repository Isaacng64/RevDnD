import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonstersService } from '../_services/monsters.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']

})
export class MonsterComponent implements OnInit {

  listmonsters!: any;

  constructor(private monstersService: MonstersService) { }

  ngOnInit(): void {
    this.monstersService.listMonsters().subscribe((data: any) => {
      this.listmonsters =data;
    } );
  }

}
