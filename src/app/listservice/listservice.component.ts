import { Component } from '@angular/core';
import { Serv } from '../serv';
import { ServiceservService } from '../services/serviceserv.service';

@Component({
  selector: 'app-listservice',
  templateUrl : './Listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent {
  services: any[] = [];
  condition: boolean=false;
  servdetails: Serv={
    description:'',
    nom:''

  };
  constructor(private service : ServiceservService){
    service.getServices().subscribe((data: any) => {
      this.services = data;
    });
  }

  getService() {
    this.service.getServices().subscribe((data: any) => {
      this.services = data;
    });
  }

  deleteServ(id: number, nom : String) {
    if(confirm("are you sure to delete  "+nom)){
    this.service.deleteserv(id).subscribe(() => {
      this.getService();
    });
  }
  }
  servDetails(id: Number){
    this.condition=true;
    this.service.getServiceById(id).subscribe((data: any) => {
      console.log(data);
      this.servdetails=data;
      
    });
  
  }
  Update() {
    if (this.servdetails?.id) { // check if id has a value
      this.service.updateserv(this.servdetails.id, this.servdetails).subscribe(() => {
        this.condition = false;
        alert("Votre mise a jour a été effectuée avec succées")
        this.getService();
      });
    }
  }
}
