import { Component, OnInit } from '@angular/core';
import { Npc } from '../npc'
import { NpcService } from '../npc.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-npc-sheet',
  templateUrl: './npc-sheet.component.html',
  styleUrls: ['./npc-sheet.component.css']
})
export class NpcSheetComponent implements OnInit {

  npcId: number;
  npc: Npc;
  constructor(private route: ActivatedRoute, private employeService: NpcService) { }

  ngOnInit(): void {
    this.npcId = this.route.snapshot.params['npcId'];

    this.npc = new Npc();
    this.employeService.getNpcById(this.npcId).subscribe( data => {
      this.npc = data;
    });
  }

}
