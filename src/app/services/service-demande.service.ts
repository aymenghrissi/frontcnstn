import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dem } from '../dem';

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
  updatedemande(id:Number , demande : Dem): Observable<Dem>{
    const url='http://localhost:8082/demande/demandes/'
  
    return this.httpClient.put<Dem>(url+id, demande);
  
  }
  
  getdemandeById(id: Number){
    const url='http://localhost:8082/demande/'
    return this.httpClient.get( url+id);
  }
}
