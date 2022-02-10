import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MonsterComponent } from './monsters/monster.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { NpcCreateComponent } from './npc-create/npc-create.component';
import { NpcUpdateComponent } from './npc-update/npc-update.component';
import { NpcListComponent } from './npc-list/npc-list.component';
import { NpcSheetComponent } from './npc-sheet/npc-sheet.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';

import { CharacterComponent } from './components/character/character.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddCharComponent } from './add-char/add-char.component';
import { AddCharactherComponent } from './components/add-characther/add-characther.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MonsterComponent,
    MonsterCardComponent,
    NpcCreateComponent,
    NpcUpdateComponent,
    NpcListComponent,
    NpcSheetComponent,
    UpdateUserComponent,
    EquipmentListComponent,
    CreateEquipmentComponent,
    UpdateEquipmentComponent,
    EquipmentDetailsComponent,
    CharacterComponent,
    AddCharactherComponent,
    AddCharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
