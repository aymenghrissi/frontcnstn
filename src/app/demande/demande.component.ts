import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dem } from '../dem';
import { ServiceDemandeService } from '../services/service-demande.service';
import { ServiceemployeeService } from '../services/serviceemployee.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  employees:any;
     newdemande:Dem={
      id:0,
      date_demmande:undefined,
      materiel_demmander:'',
      employee:{
       
        }	
     } 
   constructor(private servicedemande: ServiceDemandeService, private empserv: ServiceemployeeService, private router:Router) { }
 
   ngOnInit() {
     this.empserv.getEmployee().subscribe((data: any) => {
       this.employees= data;
       console.log(this.employees);
       
     });
   }
   
     adddemande(){
     this.servicedemande.adddemande (this.newdemande).subscribe(()=>{
       alert('Damande ajouter ');
       
       },
       (error)=> {
         console.error('error',error);
         alert('error')
       }
       );
 
   }
 


}
