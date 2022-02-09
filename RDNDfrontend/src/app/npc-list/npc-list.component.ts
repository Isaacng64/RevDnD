import { Component, OnInit } from '@angular/core';
import { Npc } from '../npc'
import { NpcService } from '../npc.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {

  npcs: Npc[];
  constructor(private npcService: NpcService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNpcs();
  }

  private getNpcs(){
    this.npcService.getNpcList().subscribe(data => {
      this.npcs = data;
    });
  }

  npcSheet(npcId: number){
    this.router.navigate(['npc-sheet', npcId]);
  }

  updateNpc(npcId: number){
    this.router.navigate(['npc-update', npcId]);
  }

  deleteNpc(npcId: number){
    this.npcService.deleteNpc(npcId).subscribe( data => {
      console.log(data);
      this.getNpcs();
    })
  }

}
