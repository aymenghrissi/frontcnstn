import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dem } from '../dem';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemandeService {

  baseUrl = 'http://192.168.5.154:8082/demande';
  constructor(private httpClient: HttpClient, private auth : UserAuthService) {}
  token = this.auth.getToken();
  requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+ this.token });
  
  adddemande( demande : any ) {
    return this.httpClient.post(this.baseUrl ,demande,{ headers: this.requestHeader});
  
}
  getdemande(){
    return this.httpClient.get(this.baseUrl+'/demandes',{ headers: this.requestHeader});
  }
  deletedemande(id : Number){
    
    return this.httpClient.delete('http://192.168.5.154:8082/demande/'+id,{ headers: this.requestHeader});
  
  
  }
  updatedemande(id:Number , demande : Dem): Observable<Dem>{
    const url='http://192.168.5.154:8082/demande/demandes/'
  
    return this.httpClient.put<Dem>(url+id, demande,{ headers: this.requestHeader});
  
  }
  
  getdemandeById(id: Number){
    const url='http://192.168.5.154:8082/demande/'
    return this.httpClient.get( url+id,{ headers: this.requestHeader});
  }
}
