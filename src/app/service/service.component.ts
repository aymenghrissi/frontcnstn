import { Component } from '@angular/core';
import { ServiceservService } from '../services/serviceserv.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  serv = {
    
    description: '',
    nom: '',
    direction: {
      id: ''
    }
  };
  constructor(private Service: ServiceservService) { }
addservice(){
  this.Service.addservice(this.serv).subscribe(() => {
    alert('Form submitted successfully');
  }, (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });
}
}
