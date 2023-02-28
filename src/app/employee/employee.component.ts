import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ServiceemployeeService } from '../services/serviceemployee.service';
import { ServiceservService } from '../services/serviceserv.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(private employee : ServiceemployeeService ,private service  : ServiceservService){}
  services: any;

  newemp : Employee = {
    nom: "",
    prenom: "",
    cin: 0 ,
    tel: 0 ,
    matricule: 0 ,
    adresse:"",
    poste:""
  };
  ngOnInit() {
    this.service.getServices().subscribe((data: any) => {
      this.services = data;
      console.log(this.services);
      
    });
  }
 addemp(){
      this.employee.addEmployee(this.newemp).subscribe(() => {
        //console.log(this.newserv)
        alert('Form submitted successfully');
       // this.router.navigateByUrl('/listserv');
      console}, 
      (error) => {
        console.error('Error submitting form', error);
        alert('Error submitting form');
      });

}
}