import { Component } from '@angular/core';
import { Management } from '../management';
import { ServicemanagementService } from '../services/servicemanagement.service';

@Component({
  selector: 'app-listadministration',
  templateUrl: './listadministration.component.html',
  styleUrls: ['./listadministration.component.css']
})
export class ListadministrationComponent {
  condition: boolean=false;
  dirdetails: Management={
    description:'',
    nom:''

  };
  
  directions: any[] = [];
  constructor(private servicemanagement: ServicemanagementService) {
    this.getDirections();
  }

  getDirections() {
    this.servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
  }

  deleteDir(id: Number,nom: String) {
    if(confirm("are you sure to delete  "+nom)){
    this.servicemanagement.deletedir(id).subscribe(() => {
      this.getDirections();
    });
  }
  }
  dirDetails(id: Number){
    this.condition=true;
    this.servicemanagement.getDirectionById(id).subscribe((data: any) => {
      console.log(data);
      this.dirdetails=data;
      
    });
  
  }
  
  Update() {
    if (this.dirdetails?.id) { // check if id has a value
      this.servicemanagement.updatedir(this.dirdetails.id, this.dirdetails).subscribe(() => {
        this.condition = false;
        alert("Votre mise a jour a été effectuée avec succées")
        this.getDirections();
      });
    }
  }
    
  
  }






