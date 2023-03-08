import { Component } from '@angular/core';
import { guide,dataset } from '../model/dataguides';
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  filter: String  = '' ;
  
  from: Array<guide> = dataset; 
}
