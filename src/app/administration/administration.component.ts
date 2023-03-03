import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Management } from '../management';
import { ServicemanagementService } from '../services/servicemanagement.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent {
  condition: boolean=false;
  dirdetails: Management={
    description:'',
    nom:''

  };

  management = {
    
    description: '',
    nom: ''
  };
  constructor(private managementService: ServicemanagementService, private router: Router) { }

 ngOInit(){

 }
 addDirection(){
  this.managementService.addManagement(this.management).subscribe(() => {
    alert('Form submitted successfully');
    this.router.navigateByUrl('/listcat');
  }, (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });
}


}


  


