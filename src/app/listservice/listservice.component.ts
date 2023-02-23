import { Component } from '@angular/core';
import { ServiceservService } from '../services/serviceserv.service';

@Component({
  selector: 'app-listservice',
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
      <tr *ngFor="let service of services">
        <td>{{ service.id }}</td>
        <td>{{ service.nom }}</td>
        <td>{{ service.description }}</td>
      </tr>
    </tbody>
  </table>`,
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent {
  services: any[] = [];
  constructor(private service : ServiceservService){
    service.getServices().subscribe((data: any) => {
      this.services = data;
    });
  }
}
