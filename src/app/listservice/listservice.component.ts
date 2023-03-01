import { Component } from '@angular/core';
import { ServiceservService } from '../services/serviceserv.service';

@Component({
  selector: 'app-listservice',
  templateUrl : './Listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent {
  services: any[] = [];
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
}
