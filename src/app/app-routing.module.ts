import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadministrationComponent } from './listadministration/listadministration.component';
import { ServiceComponent } from './service/service.component';
import { ListserviceComponent } from './listservice/listservice.component';


const routes: Routes = [
  { path: 'acceuil-component', component: AcceuilComponent },
  { path: 'addcat', component: AdministrationComponent },
  { path: 'listcat', component: ListadministrationComponent },
  { path: 'addserv', component: ServiceComponent },
  { path: 'listserv', component: ListserviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
