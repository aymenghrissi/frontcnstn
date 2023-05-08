import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  baseUrl = 'http://192.168.5.154:8082/authenticate';
  constructor(private httpClient: HttpClient) {}
  requestHeader = new HttpHeaders(
    {"No-Auth" : "True"}
  );
  login( logdata : any ) {
    return this.httpClient.post(this.baseUrl ,logdata, {headers : this.requestHeader});
  
}
}
