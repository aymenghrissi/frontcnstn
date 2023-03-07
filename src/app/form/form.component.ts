import { Component } from '@angular/core';
import  $ from 'jquery' 
import { formdg, dataset } from '../model/data';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  little='angular-bootstrap-scaffolding';
filter: String  = '' ;
  
from: Array<formdg> = dataset;  
ngOnInit(){
  

  
}

}
