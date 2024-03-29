import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { dataset, formdg } from './model/data';
import { SearchPipe } from './search.pipe';
import { FormdscComponent } from './formdsc/formdsc.component';
import { FormdvpsComponent } from './formdvps/formdvps.component';
import { FormdsinComponent } from './formdsin/formdsin.component';
import { GuideComponent } from './guide/guide.component';
import { LogicielComponent } from './logiciel/logiciel.component';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ServiceemployeeService } from './services/serviceemployee.service';
import { LogsComponent } from './logs/logs.component';
import { HomeComponent } from './home/home.component';


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
    SearchPipe,
    FormdscComponent,
    FormdvpsComponent,
    FormdsinComponent,
    GuideComponent,
    LogicielComponent,
    LoginComponent,
    ForbiddenComponent,
    LogsComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicemanagementService,
    Management,
    AuthGuard, 
    {
      provide : HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi : true
    },
    ServiceemployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
