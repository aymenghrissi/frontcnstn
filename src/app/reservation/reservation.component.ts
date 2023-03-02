import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reserv } from '../reserv';
import { ServiceSalleService } from '../services/service-salle.service';
import { ServiceemployeeService } from '../services/serviceemployee.service';
import { ServicereservationService } from '../services/servicereservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  salles: any;
  employees: any;

  newres : Reserv = {
    
    date_d: undefined ,
    date_f: undefined,
    salle: {id : 0},
    employee:{id: 0}

    
  };
  constructor(private Serviceres: ServicereservationService, private servicesalle: ServiceSalleService, private servicemp: ServiceemployeeService, private router: Router) { }
  ngOnInit() {
    this.servicesalle.getsalle().subscribe((data: any) => {
      this.salles = data;
      console.log(this.salles);
    });
      this.servicemp.getEmployee().subscribe((data: any) => {
        this.employees = data;
        console.log(this.employees);
      
    });
  
  }
  
  
addreserv(){
  this.Serviceres.addreserv(this.newres).subscribe(() => {
    console.log(this.newres)
    alert('Form submitted successfully');
    //this.router.navigateByUrl('/listserv');
  console}, 
  (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });
}

}

