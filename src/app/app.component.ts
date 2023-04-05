import { Component } from '@angular/core';
import { ServicemanagementService } from './services/servicemanagement.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router : Router){}
  title = 'frontendcnstn';
   
  
}
