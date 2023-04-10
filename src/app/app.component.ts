import { Component } from '@angular/core';
import { ServicemanagementService } from './services/servicemanagement.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reloadPage : boolean = false
  constructor(private router : Router){}
  title = 'frontendcnstn';
  ngOnInit() {
    this.router.navigate(['/acceuil-component']).then(() => {
      if (this.reloadPage) {
        this.reloadPage = false;
        location.reload();
      }
    }); 
  }
  
}
