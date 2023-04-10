import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  fileContent : any
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('/assets/logs.txt', { responseType: 'text' }).subscribe(data => {
      this.fileContent = data;
    });
  }
  


}
