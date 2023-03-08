import { Component } from '@angular/core';
import { logiciel, dataset } from '../model/datalogiciel';
@Component({
  selector: 'app-logiciel',
  templateUrl: './logiciel.component.html',
  styleUrls: ['./logiciel.component.css']
})
export class LogicielComponent {
  filter: String  = '' ;
  
  from: Array<logiciel> = dataset; 

}
