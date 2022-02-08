import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';

const routes: Routes = [
  { path: 'equipment', component: EquipmentListComponent },
  { path: 'create-equipment', component: CreateEquipmentComponent },
  { path: '', redirectTo: 'equipment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
