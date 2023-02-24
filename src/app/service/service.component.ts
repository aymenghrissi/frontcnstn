import { Component } from '@angular/core';
import { ServiceservService } from '../services/serviceserv.service';
import { ServicemanagementService } from '../services/servicemanagement.service';
import { Serv } from '../serv';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  directions: any;

  newserv : Serv = {
    
    description: '',
    nom: '',
    direction:  { id : 0} 
    
  };
  constructor(private Service: ServiceservService, private servicemanagement: ServicemanagementService) { }
  ngOnInit() {
    this.servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
      console.log(this.directions);
      
    });
  
  }
  
  
addservice(){
  this.Service.addservice(this.newserv).subscribe(() => {
    console.log(this.newserv)
    alert('Form submitted successfully');
    console }, (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });
}
}