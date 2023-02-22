import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Management } from '../management'
 
@Injectable({
  providedIn: 'root'
})


export class ServicemanagementService {
  baseUrl = 'http://localhost:8082/dir';
constructor(private httpClient: HttpClient) {}

addManagement( management : any ) {
  return this.httpClient.post(this.baseUrl ,management );

}  

}
