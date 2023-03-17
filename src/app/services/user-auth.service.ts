import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private router : Router) { }
  public getRoles(): string[] {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      //console.log(user.role.role);

      return user.role.role;
    } catch (e) {
      console.error("Error parsing roles from localStorage:", e);
      return [];
    }
  }
  
  public setRoles(role: string) {
    try{
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    user.role = role;
    //console.log(user.role);
    localStorage.setItem("user", JSON.stringify(user));
  }catch (e){
    console.error("mat5demch",e);

  }
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
   return (localStorage.getItem("jwtToken")|| "{}");

  }

  public clear() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public isLoggedIn() {

    return this.getRoles().length > 0 && this.getToken();
  }
}
