import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicemanagementService } from './services/servicemanagement.service';
import { Management } from './management';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicemanagementService,
    Management
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
