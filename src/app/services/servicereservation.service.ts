import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserv } from '../reserv';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicereservationService {

  constructor(private httpClient: HttpClient, private auth : UserAuthService) { }
  baseUrl = 'http://localhost:8082/reservation';

addreserv( Serv : any ) {
  //Serv.direction_id = Number(Serv.direction_id);
  return this.httpClient.post(this.baseUrl ,Serv ,{ headers: this.requestHeader} );

}  

getreserv() {
  const url = 'http://192.168.5.154:8082/reservation/list';
  return this.httpClient.get(url,{ headers: this.requestHeader});
}
token = this.auth.getToken();
requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.token });
deletereserv(id : Number){
  
  return this.httpClient.delete('http://192.168.5.154:8082/reservation/'+id,{ headers: this.requestHeader});


}
updateserv(id:Number , reservation : Reserv): Observable<Reserv>{
  const url='http://192.168.5.154:8082/reservation/reservations/'

  return this.httpClient.put<Reserv>(url+id, reservation,{ headers: this.requestHeader});

}

getServiceById(id: Number){
  const url='http://192.168.5.154:8082/reservation/'
  return this.httpClient.get( url+id,{ headers: this.requestHeader});
}
}
