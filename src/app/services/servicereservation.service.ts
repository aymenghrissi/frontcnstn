import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserv } from '../reserv';

@Injectable({
  providedIn: 'root'
})
export class ServicereservationService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:8082/reservation';

addreserv( Serv : any ) {
  //Serv.direction_id = Number(Serv.direction_id);
  return this.httpClient.post(this.baseUrl ,Serv );

}  

getreserv() {
  const url = 'http://localhost:8082/reservation/list';
  return this.httpClient.get(url);
}
deletereserv(id : Number){
  
  return this.httpClient.delete('http://localhost:8082/reservation/'+id);


}
updateserv(id:Number , reservation : Reserv): Observable<Reserv>{
  const url='http://localhost:8082/reservation/reservations/'

  return this.httpClient.put<Reserv>(url+id, reservation);

}

getServiceById(id: Number){
  const url='http://localhost:8082/reservation/'
  return this.httpClient.get( url+id);
}
}
