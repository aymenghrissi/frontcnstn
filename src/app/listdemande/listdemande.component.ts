import { Component } from '@angular/core';
import { Dem } from '../dem';
import { Employee } from '../employee';
import { ServiceDemandeService } from '../services/service-demande.service';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.css']
})
export class ListdemandeComponent {
  condition: boolean=false;
  demdetails: Dem={
    date_demmande:undefined,
    materiel_demmander:"",
    employee:{
      id:0
    }

  };
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

   demDetails(id: Number){
    this.condition=true;
    this.servicedemande.getdemandeById(id).subscribe((data: any) => {
      console.log(data);
      this.demdetails=data;
      
    });
  
  }
  
  Update() {
    if (this.demdetails?.id) { // check if id has a value
      this.servicedemande.updatedemande(this.demdetails.id, this.demdetails).subscribe(() => {
        this.condition = false;
        alert("Votre mise a jour a été effectuée avec succées")
        this.getdemande();
      });
    }
  }


}
