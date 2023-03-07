import { Component } from '@angular/core';
import  $ from 'jquery' 
import formdg from '../model/formsDG.json'


interface formulairedg {
  id: Number;
  name: String;
  link: String;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  little='angular-bootstrap-scaffolding';
  

from:formulairedg[]=formdg;

ngOnInit(){
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
};

}
