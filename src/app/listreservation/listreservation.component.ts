import { Component } from '@angular/core';
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
  constructor(private res : ServicereservationService) {
    this.getreserv();
  

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
