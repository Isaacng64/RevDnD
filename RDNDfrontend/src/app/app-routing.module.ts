import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';

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
  { path: 'npc-sheet/:npcId', component: NpcSheetComponent },
  { path: 'equipment', component: EquipmentListComponent },
  { path: 'create-equipment', component: CreateEquipmentComponent },
  { path: '', redirectTo: 'equipment', pathMatch: 'full' },
  { path: 'update-equipment/:id', component: UpdateEquipmentComponent },
  { path: 'equipment-details/:id', component: EquipmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
