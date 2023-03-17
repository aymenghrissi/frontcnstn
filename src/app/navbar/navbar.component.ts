import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceemployeeService } from '../services/serviceemployee.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public userauth : UserAuthService , private router : Router,public emp : ServiceemployeeService){}
  public isloggedin(){
    return this.userauth.isLoggedIn();
  }
  public logout() {
    this.userauth.clear();
  }
  

}
