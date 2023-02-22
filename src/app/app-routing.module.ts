import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'acceuil-component', component: AcceuilComponent },
  
  { path: 'addcat', component: AdministrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
