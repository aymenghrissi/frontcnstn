import { Component } from '@angular/core';
import { Management } from '../management';
import { ServicemanagementService } from '../services/servicemanagement.service';

@Component({
  selector: 'app-listadministration',
  templateUrl: './listadministration.component.html',
  styleUrls: ['./listadministration.component.css']
})
export class ListadministrationComponent {
  directions: any[] = [];
  constructor(private servicemanagement: ServicemanagementService) {
    this.getDirections();
  }

  getDirections() {
    this.servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
  }

  deleteDir(id: number) {
    this.servicemanagement.deletedir(id).subscribe(() => {
      // Update the directions list after deleting the direction
      this.getDirections();
    });
  }
}





