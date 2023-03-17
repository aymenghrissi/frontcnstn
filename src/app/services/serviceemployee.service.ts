import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { UserAuthService } from './user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceemployeeService {
  baseUrl = 'http://localhost:8082/employee';
  constructor(private httpClient: HttpClient ,private authservice : UserAuthService) { }
  addEmployee( employee : any ) {
    return this.httpClient.post(this.baseUrl ,employee,{ headers: this.requestHeader} );
  
  }
  token = this.authservice.getToken();
  requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.token });

  getEmployee() {
    const url = 'http://localhost:8082/employee/list';
    return this.httpClient.get(url,{ headers: this.requestHeader});
  }
  deleteemp(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/employee/'+id,{ headers: this.requestHeader});
  
  
  }
  public isMatch(str: string ): boolean {
    const roles = this.authservice.getRoles();
    return roles.includes(str);
  }
  
  
  

}
