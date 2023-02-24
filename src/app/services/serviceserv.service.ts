import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serv } from '../serv';

@Injectable({
  providedIn: 'root'
})
export class ServiceservService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:8082/service';

addservice( Serv : any ) {
  //Serv.direction_id = Number(Serv.direction_id);
  return this.httpClient.post(this.baseUrl ,Serv );

}  

getServices() {
  const url = 'http://localhost:8082/service/list';
  return this.httpClient.get(url);
}
}
