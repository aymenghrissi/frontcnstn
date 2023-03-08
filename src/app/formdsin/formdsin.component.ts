import { Component } from '@angular/core';
import { formdsin , dataset } from '../model/datadsin';
@Component({
  selector: 'app-formdsin',
  templateUrl: './formdsin.component.html',
  styleUrls: ['./formdsin.component.css']
})
export class FormdsinComponent {
  filter: String  = '' ;
  
  from: Array<formdsin> = dataset; 
}
