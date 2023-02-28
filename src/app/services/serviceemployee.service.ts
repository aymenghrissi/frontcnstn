import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceemployeeService {
  baseUrl = 'http://localhost:8082/employee';
  constructor(private httpClient: HttpClient) { }
  addEmployee( employee : any ) {
    return this.httpClient.post(this.baseUrl ,employee );
  
  }

  getEmployee() {
    const url = 'http://localhost:8082/employee/list';
    return this.httpClient.get(url);
  }
  deleteemp(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/employee/'+id);
  
  
  }
}
