import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceservService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:8082/service';

addservice( management : any ) {
  return this.httpClient.post(this.baseUrl ,management );

}  

getServices() {
  const url = 'http://localhost:8082/service/list';
  return this.httpClient.get(url);
}
}
