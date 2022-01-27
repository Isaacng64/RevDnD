import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms' 
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './update-user/update-user.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
