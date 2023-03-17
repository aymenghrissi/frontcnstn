import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Management } from '../management'
import { UserAuthService } from './user-auth.service';
 
@Injectable({
  providedIn: 'root'
})


export class ServicemanagementService {
  baseUrl = 'http://localhost:8082/dir';
constructor(private httpClient: HttpClient,private auth : UserAuthService) {}

addManagement( management : any ) {
  return this.httpClient.post(this.baseUrl ,management,{ headers: this.requestHeader} );

}  
token = this.auth.getToken();
requestHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.token });

getDirections() {
  const url = 'http://localhost:8082/dir/directions';
  return this.httpClient.get(url,{ headers: this.requestHeader});
}
deletedir(id : Number){
  
  return this.httpClient.delete('http://localhost:8082/dir/'+id,{ headers: this.requestHeader});


}
updatedir(id:Number , direction : Management): Observable<Management>{
  const url='http://localhost:8082/dir/directions/'

  return this.httpClient.put<Management>(url+id, direction, { headers: this.requestHeader});

}

getDirectionById(id: Number){
  const url='http://localhost:8082/dir/'
  return this.httpClient.get( url+id, { headers: this.requestHeader} );
}
}

