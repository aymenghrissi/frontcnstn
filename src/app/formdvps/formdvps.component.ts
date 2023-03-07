import { Component } from '@angular/core';

import { formdvps , dataset } from '../model/datadvps';
@Component({
  selector: 'app-formdvps',
  templateUrl: './formdvps.component.html',
  styleUrls: ['./formdvps.component.css']
})
export class FormdvpsComponent {
  filter: String  = '' ;
  
  from: Array<formdvps> = dataset; 
}
