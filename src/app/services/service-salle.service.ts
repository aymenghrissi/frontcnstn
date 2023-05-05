import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sal } from '../sal';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceSalleService {
  baseUrl = 'http://192.168.5.154:8082/salle';
  constructor(private httpClient: HttpClient, private auth : UserAuthService) { }
  token = this.auth.getToken();
  requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.token });
  addsalle( sal : any ) {
    return this.httpClient.post(this.baseUrl ,sal,{ headers: this.requestHeader});
  
  }

  getsalle() {
    const url = 'http://192.168.5.154:8082/salle/list';
    return this.httpClient.get(url,{ headers: this.requestHeader});
  }
  deletesalle(id : Number){
    
    return this.httpClient.delete('http://192.168.5.154:8082/salle/'+id,{ headers: this.requestHeader});
  
  
  }
  updatesalle(id:Number , salle : Sal): Observable<Sal>{
    const url='http://192.168.5.154:8082/salle/salles/'
  
    return this.httpClient.put<Sal>(url+id, salle,{ headers: this.requestHeader});
  
  }
  
  getsalleById(id: Number){
    const url='http://192.168.5.154:8082/salle/'
    return this.httpClient.get( url+id,{ headers: this.requestHeader});
  }
}
