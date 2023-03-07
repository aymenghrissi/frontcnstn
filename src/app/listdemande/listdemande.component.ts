import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ServiceDemandeService } from '../services/service-demande.service';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.css']
})
export class ListdemandeComponent {
  demandes: any[] = [];
  employee:Employee={
    id:0,
    nom:'',
    prenom:''
  }
  constructor(private servicedemande : ServiceDemandeService){
    servicedemande.getdemande().subscribe((data: any) => {
      this.demandes = data;
    });
    
  }
  getdemande() {
    this.servicedemande.getdemande().subscribe((data: any) => {
      console.log(this.demandes);
      this.demandes= data;
      console.log(this.demandes);
    });
  }

  deletedemande(id: number , nom:string) {
    if(confirm("are you sure to delete " + nom)) {
    this.servicedemande.deletedemande(id).subscribe(() => {
      this.getdemande();
    });
     
    }
   }




}
