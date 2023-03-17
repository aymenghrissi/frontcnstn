import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logreq } from '../logreq';
import { LogService } from '../services/log.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loge :LogService ,private userauthservice : UserAuthService ,private router: Router){}
  log : Logreq ={
    userName : "",
    password : "" 
  }
  
  login(){
    this.loge.login(this.log).subscribe((Response: any) => {
      this.userauthservice.setRoles(Response.user);
      this.userauthservice.setToken(Response.jwtToken);
  
      const role = Response.user.role;
      if (role === 'admin') {
        this.router.navigateByUrl('/acceuil-component');
      } else {
        this.router.navigateByUrl('/acceuil-component');
      }
    }, 
    (error) => {
      console.error('Error submitting form', error);
      alert('Error submitting form');
    });
  }
  

}
