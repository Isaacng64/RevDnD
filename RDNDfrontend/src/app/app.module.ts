import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { FormsModule } from '@angular/forms';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipmentListComponent,
    CreateEquipmentComponent,
    UpdateEquipmentComponent,
    EquipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
