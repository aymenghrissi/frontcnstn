import { Component } from '@angular/core';
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

  deleteemp(id: number) {
    this.servicemp.deleteemp(id).subscribe(() => {
      this.getemployee();
    });
  }
}
