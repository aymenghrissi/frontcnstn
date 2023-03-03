import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemandeService {

  baseUrl = 'http://localhost:8082/demande';
  constructor(private httpClient: HttpClient) {}
  
  adddemande( demande : any ) {
    return this.httpClient.post(this.baseUrl ,demande);
  
}
  getdemande(){
    return this.httpClient.get(this.baseUrl+'/demandes');
  }
  deletedemande(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/demande/'+id);
  
  
  }
}
