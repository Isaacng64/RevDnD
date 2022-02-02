import { Component, Input, OnInit } from '@angular/core';
import { MonstersService } from '../_services/monsters.service';
import { MonsterComponent } from '../monsters/monster.component';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})
export class MonsterCardComponent implements OnInit {

  @Input() paranMonster : string ='';
  monster!: any;
  constructor(private monstersService: MonstersService) { }

  ngOnInit(): void {
    this.monstersService.getMonster(this.paranMonster).subscribe((data: any) => {
      this.monster = data;

      // console.log(this.paranMonster)
      // console.log(data)
    });
  }

}
