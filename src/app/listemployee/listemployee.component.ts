import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ServiceemployeeService } from '../services/serviceemployee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent {
  employees: any[] = [];
  condition: boolean=false;
  demandes: any[] = [];
  employee:Employee={
    id:0,
    nom:'',
    prenom:'',
    cin:0,
    tel:0,
    adresse:'',
    poste:'',
    matricule:0,
    email:'',
    tel_interne:0,
    role:'',
  }
  constructor(private servicemp: ServiceemployeeService) {
    servicemp.getEmployee().subscribe((data: any) => {
      this.demandes = data;
    });
    this.getemployee();
  }

  getemployee() {
    this.servicemp.getEmployee().subscribe((data: any) => {
      this.employees = data;
    });
  }
emp : any = this.employees ;
  deleteemp(id: number , nom : String) {
    if(confirm("are you sure to delete  "+nom)){
    this.servicemp.deleteemp(id).subscribe(() => {
      this.getemployee();
    });
  }
  }
  empDetails(id: Number){
    this.condition=true;
    this.servicemp.getemployeeById(id).subscribe((data: any) => {
      console.log(data);
      this.employee=data;
      
    });
  
  }
  
  Update() {
    if (this.employee?.id) { // check if id has a value
      this.servicemp.updateemployee(this.employee.id, this.employee).subscribe(() => {
        this.condition = false;
        alert("Votre mise a jour a été effectuée avec succées")
        this.getemployee();
      });
    }
  }
}
