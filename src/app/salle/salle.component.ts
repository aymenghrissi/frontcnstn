import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sal } from '../sal';
import { ServiceSalleService } from '../services/service-salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {

 newsal : Sal = {
    nom: '',
    nombre_place:0
  };
  constructor(private salleserv: ServiceSalleService, private router: Router) { }

 ngOInit(){

 }
 addsalle(){
  this.salleserv.addsalle(this.newsal).subscribe(() => {
    alert('Form submitted successfully');
    this.router.navigateByUrl('/listsalle');
  }, (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });
}
}
