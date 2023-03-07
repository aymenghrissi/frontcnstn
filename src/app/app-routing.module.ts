import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';
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
import { FormComponent } from './form/form.component';
import { FormdscComponent } from './formdsc/formdsc.component';
import { FormdvpsComponent } from './formdvps/formdvps.component';


const routes: Routes = [
  { path: 'acceuil-component', component: AcceuilComponent },
  { path: 'addcat', component: AdministrationComponent },
  { path: 'listcat', component: ListadministrationComponent },
  { path: 'addserv', component: ServiceComponent },
  { path: 'listserv', component: ListserviceComponent },
  { path: 'addemp', component: EmployeeComponent },
  { path: 'listemp', component: ListemployeeComponent },
  { path: 'addsalle', component: SalleComponent },
  { path: 'listsalle', component: ListsalleComponent },
  { path: 'addres', component: ReservationComponent },
  { path: 'listres', component: ListreservationComponent },
  { path: 'adddem', component: DemandeComponent },
  { path: 'listdem', component: ListdemandeComponent },
  { path: 'updir', component: UpdatedirComponent },
  { path: 'dg', component: FormComponent },
  { path: 'dsc', component: FormdscComponent },
  { path: 'dvps', component: FormdvpsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule ,
     Ng2SearchPipeModule ,
     
     
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
