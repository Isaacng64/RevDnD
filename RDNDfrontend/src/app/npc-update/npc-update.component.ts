import { Component, OnInit } from '@angular/core';
import { Npc } from '../npc'
import { NpcService } from '../npc.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-npc-update',
  templateUrl: './npc-update.component.html',
  styleUrls: ['./npc-update.component.css']
})
export class NpcUpdateComponent implements OnInit {

  npcId: number;
  npc: Npc = new Npc();
  constructor(private npcService: NpcService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.npcId = this.route.snapshot.params['npcId'];

    this.npcService.getNpcById(this.npcId).subscribe(data => {
      this.npc = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.npcService.updateNpc(this.npcId, this.npc).subscribe( data =>{
      this.goToNpcList();
    }
    , error => console.log(error));
  }

  goToNpcList(){
    this.router.navigate(['/npcs']);
  }
}

