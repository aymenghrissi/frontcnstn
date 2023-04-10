import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class ServiceemployeeService {
  baseUrl = 'http://localhost:8082/register';
  constructor(private httpClient: HttpClient ,private auth : UserAuthService) { }
  token = this.auth.getToken();
  requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.token });
  addEmployee( employee : any ) {
    return this.httpClient.post(this.baseUrl ,employee);
  
  }

  getEmployee() {
    const url = 'http://localhost:8082/employee/list';
    return this.httpClient.get(url,{ headers: this.requestHeader});
  }
  deleteemp(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/employee/'+id,{ headers: this.requestHeader});
  
  
  }
 public isMatch(str: string ): boolean {
  const roles = this.auth.getRoles();
  return roles && roles.includes(str);
}
updateemployee(id:Number , employee : Employee): Observable<Employee>{
  const url='http://localhost:8082/employee/employees/'

  return this.httpClient.put<Employee>(url+id, employee,{ headers: this.requestHeader});

}

getemployeeById(id: Number){
  const url='http://localhost:8082/employee/'
  return this.httpClient.get( url+id,{ headers: this.requestHeader});
}
  
  
  

}
