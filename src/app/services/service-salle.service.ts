import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sal } from '../sal';

@Injectable({
  providedIn: 'root'
})
export class ServiceSalleService {
  baseUrl = 'http://localhost:8082/salle';
  constructor(private httpClient: HttpClient) { }
  addsalle( sal : any ) {
    return this.httpClient.post(this.baseUrl ,sal );
  
  }

  getsalle() {
    const url = 'http://localhost:8082/salle/list';
    return this.httpClient.get(url);
  }
  deletesalle(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/salle/'+id);
  
  
  }
}
