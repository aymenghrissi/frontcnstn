import { Component } from '@angular/core';
import { Management } from '../management';
import { ServicemanagementService } from '../services/servicemanagement.service';

@Component({
  selector: 'app-listadministration',
  template:  `
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let direction of directions">
        <td>{{ direction.id }}</td>
        <td>{{ direction.nom }}</td>
        <td>{{ direction.description }}</td>
      </tr>
    </tbody>
  </table>`
,
  styleUrls: ['./listadministration.component.css']
})
export class ListadministrationComponent {
  directions: any[] = [];
  constructor(private servicemanagement : ServicemanagementService){
    servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
  }

}
