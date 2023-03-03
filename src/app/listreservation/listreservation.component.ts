import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Sal } from '../sal';
import { ServiceSalleService } from '../services/service-salle.service';
import { ServiceemployeeService } from '../services/serviceemployee.service';
import { ServicereservationService } from '../services/servicereservation.service';

@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})
export class ListreservationComponent {
  reservations: any[] = [];
  employees: any[] = [];
  salles: any[] = [];
  constructor(private res : ServicereservationService , private emp : ServiceemployeeService,private sall: ServiceSalleService) {
    this.getemp();
    this.getreserv();
    this.getsalle();
   }
  getemp(){
    this.emp.getEmployee().subscribe((data: any) => {
      this.employees= data;
    });
  
  }
  getsalle(){
    this.sall.getsalle().subscribe((data: any) => {
      this.salles= data;
    });
  }
  getreserv() {
    this.res.getreserv().subscribe((data: any) => {
      this.reservations= data;
      console.log(this.reservations)
    });
  }
  deletesalle(id: number) {
    if(confirm("are you sure to delete  ")){
    this.res.deletereserv(id).subscribe(() => {
      this.getreserv();
    });
  }
  }

}
