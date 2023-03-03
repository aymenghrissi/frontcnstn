import { Component } from '@angular/core';
import { ServiceDemandeService } from '../services/service-demande.service';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.css']
})
export class ListdemandeComponent {
  demandes: any[] = [];
  constructor(private servicedemande : ServiceDemandeService){
    servicedemande.getdemande().subscribe((data: any) => {
      this.demandes = data;
    });
    
  }
  getdemande() {
    this.servicedemande.getdemande().subscribe((data: any) => {
      this.demandes= data;
    });
  }

  deletedemande(id: number , nom:string) {
    if(confirm("Etes vous sur de supprimer cet demande " + nom)) {
    this.servicedemande.deletedemande(id).subscribe(() => {
      this.getdemande();
    });
     
    }
   }




}
