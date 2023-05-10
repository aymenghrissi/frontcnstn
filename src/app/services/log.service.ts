import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  baseUrl = 'http://localhost:8082/authenticate';

  constructor(private httpClient: HttpClient) { }

  login(logdata: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return this.httpClient.post(this.baseUrl, logdata, { headers });
  }
}
