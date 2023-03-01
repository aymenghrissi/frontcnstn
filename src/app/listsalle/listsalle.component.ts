import { Component } from '@angular/core';
import { ServiceSalleService } from '../services/service-salle.service';

@Component({
  selector: 'app-listsalle',
  templateUrl: './listsalle.component.html',
  styleUrls: ['./listsalle.component.css']
})
export class ListsalleComponent {
  salles: any[] = [];
  constructor(private servicesalle: ServiceSalleService) {
    this.getsalle();
  }

  getsalle() {
    this.servicesalle.getsalle().subscribe((data: any) => {
      this.salles= data;
    });
  }

  deletesalle(id: number,nom: String) {
    if(confirm("are you sure to delete  "+nom)){
    this.servicesalle.deletesalle(id).subscribe(() => {
      this.getsalle();
    });
  }
  }

}
