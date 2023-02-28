import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadministrationComponent } from './listadministration/listadministration.component';
import { ServiceComponent } from './service/service.component';
import { ListserviceComponent } from './listservice/listservice.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';


const routes: Routes = [
  { path: 'acceuil-component', component: AcceuilComponent },
  { path: 'addcat', component: AdministrationComponent },
  { path: 'listcat', component: ListadministrationComponent },
  { path: 'addserv', component: ServiceComponent },
  { path: 'listserv', component: ListserviceComponent },
  { path: 'addemp', component: EmployeeComponent },
  { path: 'listemp', component: ListemployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
