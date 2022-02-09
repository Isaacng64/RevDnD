import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';

const routes: Routes = [
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
