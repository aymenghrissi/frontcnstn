import { Component } from '@angular/core';
import { ServiceservService } from '../services/serviceserv.service';
import { ServicemanagementService } from '../services/servicemanagement.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  directions: any
  serv = {
    
    description: '',
    nom: '',
    direction: {
      id: ''
    }
  };
  constructor(private Service: ServiceservService, private servicemanagement: ServicemanagementService) { }
  ngOnInit() {
    this.servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
  
  }
  

  
addservice(){
  this.Service.addservice(this.serv).subscribe(() => {
    alert('Form submitted successfully');
  }, (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });
}
}
