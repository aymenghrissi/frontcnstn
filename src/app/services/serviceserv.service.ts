import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serv } from '../serv';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceservService {

  constructor(private httpClient: HttpClient,private auth : UserAuthService) { }
  baseUrl = 'http://localhost:8082/service';
  token = this.auth.getToken();
  requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.token });
addservice( Serv : any ) {
  //Serv.direction_id = Number(Serv.direction_id);
  return this.httpClient.post(this.baseUrl ,Serv ,{ headers: this.requestHeader});

}  

getServices() {
  const url = 'http://localhost:8082/service/list';
  return this.httpClient.get(url,{ headers: this.requestHeader});
}
deleteserv(id : Number){
  
  return this.httpClient.delete('http://localhost:8082/service/'+id,{ headers: this.requestHeader});


}
updateserv(id:Number , service : Serv): Observable<Serv>{
  const url='http://localhost:8082/service/services/'

  return this.httpClient.put<Serv>(url+id, service,{ headers: this.requestHeader});

}

getServiceById(id: Number){
  const url='http://localhost:8082/service/'
  return this.httpClient.get( url+id,{ headers: this.requestHeader});
}
}
