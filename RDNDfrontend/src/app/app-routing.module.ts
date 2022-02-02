import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { MonsterComponent } from './monsters/monster.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { NpcCreateComponent } from './npc-create/npc-create.component';
import { NpcUpdateComponent } from './npc-update/npc-update.component';
import { NpcListComponent } from './npc-list/npc-list.component';
import { NpcSheetComponent } from './npc-sheet/npc-sheet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'monsters', component: MonsterComponent },
  { path: 'monster/:name', component:  MonsterCardComponent},
  { path: 'npcs', component: NpcListComponent },
  { path: 'npc-create', component: NpcCreateComponent },
  { path: 'npc-update/:npcId', component: NpcUpdateComponent },
  { path: 'npc-sheet/:npcId', component: NpcSheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
