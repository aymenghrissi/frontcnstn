import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceemployeeService } from '../services/serviceemployee.service';
import { ServiceservService } from '../services/serviceserv.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(private employee : ServiceemployeeService ,private service  : ServiceservService,private router: Router){}
  services: any;

  newemp : Employee = {
    nom: "",
    prenom: "",
    cin: 0 ,
    tel: 0 ,
    matricule: 0 ,
    adresse:"",
    poste:"",
    email:"",
    password:"",
    tel_interne:0,
    service:{id : 0},
    role:"user"

  };
  ngOnInit() {
    this.service.getServices().subscribe((data: any) => {
      this.services = data;
      console.log(this.services);
      
    });
  }
 addemp(){
      this.employee.addEmployee(this.newemp).subscribe(() => {
        alert('Form submitted successfully');
        //this.router.navigateByUrl('/listemp');
       
      console}, 
      (error) => {
        console.error('Error submitting form', error);
        alert('Error submitting form');
      });

}
}