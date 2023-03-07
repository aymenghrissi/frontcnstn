import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicemanagementService } from './services/servicemanagement.service';
import { Management } from './management';
import { ListadministrationComponent } from './listadministration/listadministration.component';
import { ServiceComponent } from './service/service.component';
import { ListserviceComponent } from './listservice/listservice.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { SalleComponent } from './salle/salle.component';
import { ListsalleComponent } from './listsalle/listsalle.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListreservationComponent } from './listreservation/listreservation.component';
import { DemandeComponent } from './demande/demande.component';
import { ListdemandeComponent } from './listdemande/listdemande.component';
import { UpdatedirComponent } from './updatedir/updatedir.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    AdministrationComponent,
    ListadministrationComponent,
    ServiceComponent,
    ListserviceComponent,
    EmployeeComponent,
    ListemployeeComponent,
    SalleComponent,
    ListsalleComponent,
    ReservationComponent,
    ListreservationComponent,
    DemandeComponent,
    ListdemandeComponent,
    UpdatedirComponent,
    FooterComponent,
    FormComponent,
    
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
