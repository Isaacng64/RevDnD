
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharactherComponent } from './components/add-characther/add-characther.component';
import { CharacterComponent } from './components/character/character.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'characters',component: CharacterComponent},
  {path:'add-character',component:AddCharactherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }