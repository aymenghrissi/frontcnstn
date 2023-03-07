import { Component } from '@angular/core';
import { formdsc,dataset } from '../model/datadsc'; 
@Component({
  selector: 'app-formdsc',
  templateUrl: './formdsc.component.html',
  styleUrls: ['./formdsc.component.css']
})
export class FormdscComponent {
  filter: String  = '' ;
  
  from: Array<formdsc> = dataset; 

}
