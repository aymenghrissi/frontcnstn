import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Reserv } from '../reserv';
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
  condition: boolean=false;
  resdetails: Reserv={
    date_d:undefined,
    date_f:undefined

  };
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
  resDetails(id: Number){
    this.condition=true;
    this.res.getServiceById(id).subscribe((data: any) => {
      console.log(data);
      this.resdetails=data;
      
    });
  
  }
  
  Update() {
    if (this.resdetails?.id) { // check if id has a value
      this.res.updateserv(this.resdetails.id, this.resdetails).subscribe(() => {
        this.condition = false;
        alert("Votre mise a jour a été effectuée avec succées")
        this.getreserv();
      });
    }
  }

}
