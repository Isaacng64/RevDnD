import { Component, OnInit } from '@angular/core';
import { Npc } from '../npc'
import { NpcService } from '../npc.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-npc-create',
  templateUrl: './npc-create.component.html',
  styleUrls: ['./npc-create.component.css']
})
export class NpcCreateComponent implements OnInit {

  npc: Npc = new Npc();
  constructor(private npcService: NpcService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveNpc(){
    this.npcService.createNpc(this.npc).subscribe( data =>{
      console.log(data);
      this.goToNpcList();
    },
    error => console.log(error));
  }

  goToNpcList(){
    this.router.navigate(['/npcs']);
  }

  onSubmit(){
    console.log(this.npc);
    this.saveNpc();
  }
}
