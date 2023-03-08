import { Component } from '@angular/core';
import { Sal } from '../sal';
import { ServiceSalleService } from '../services/service-salle.service';

@Component({
  selector: 'app-listsalle',
  templateUrl: './listsalle.component.html',
  styleUrls: ['./listsalle.component.css']
})
export class ListsalleComponent {
  condition: boolean=false;
  saldetails: Sal={
    
    nom:'',
    nombre_place : 0

  };
  salles: any[] = [];
  constructor(private servicesalle: ServiceSalleService) {
    this.getsalle();
  }

  getsalle() {
    this.servicesalle.getsalle().subscribe((data: any) => {
      this.salles= data;
    });
  }

  deletesalle(id: number,nom: String) {
    if(confirm("are you sure to delete  "+nom)){
    this.servicesalle.deletesalle(id).subscribe(() => {
      this.getsalle();
    });
  }
  }
  salDetails(id: Number){
    this.condition=true;
    this.servicesalle.getsalleById(id).subscribe((data: any) => {
      console.log(data);
      this.saldetails=data;
      
    });
  
  }
  
  Update() {
    if (this.saldetails?.id) { // check if id has a value
      this.servicesalle.updatesalle(this.saldetails.id, this.saldetails).subscribe(() => {
        this.condition = false;
        alert("Votre mise a jour a été effectuée avec succées")
        this.getsalle();
      });
    }
  }

}
