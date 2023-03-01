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
  constructor(private servicemp: ServiceemployeeService) {
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
}
